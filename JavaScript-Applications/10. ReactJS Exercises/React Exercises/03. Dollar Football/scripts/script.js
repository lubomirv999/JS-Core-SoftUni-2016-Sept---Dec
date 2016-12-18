function solve() {
    let url = "https://baas.kinvey.com/appdata/kid_BJe588Szx/football-matches";
    let headers = {
        "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q=",
        "Content-Type": "application/json"
    };

    let myBets = [];

    let BetsTable = React.createClass({
        render: function () {
            return <table>
            <thead>
            <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Start</th>
            <th>Bet On</th>
            <th>Ratio</th>
            <th>Value</th>
            <th>Estimated Winnings</th>
            </tr>
            </thead>
            <tbody>{this.props.elements}</tbody>
            </table>
        }
    });

    let MatchesTable = React.createClass({
        render: function () {
            return <table id="matchesTable">
                <thead>
                <tr>
                <th>Id</th>
                <th>Home Team</th>
            <th>Away Team</th>
            <th>Start</th>
            <th>Win</th>
            <th>Draw</th>
            <th>Lose</th>
            <th>Bet</th>
            <th>Bet On</th>
            <th>Submit</th>
            </tr>
            </thead>
            <tbody>{this.props.elements}</tbody>
            </table>
        }
    });

    let AppView = React.createClass({
        getInitialState: function () {
            return {
                children: []
            }
        },
        showMatches: function () {
            let that = this;
            $.ajax({
                method: 'GET',
                url: url,
                headers: headers,
                success: function (success) {
                    that.setState({
                            children: <MatchesTable elements={that.matchDataHandler(success)}/>
                });
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },
        matchDataHandler: function (arr) {
            let that = this;
            function sorter(elem1, elem2) {
                let time1 = elem1.time.split(" ")[0];
                let format1 = elem1.time.split(" ")[1];

                let time2 = elem2.time.split(" ")[0];
                let format2 = elem2.time.split(" ")[1];

                let hour1 = Number(time1.split(":")[0]);
                let minutes1 = Number(time1.split(":")[1]);

                let hour2 = Number(time2.split(":")[0]);
                let minutes2 = Number(time2.split(":")[1]);

                let result = format1.localeCompare(format2);

                if (result == 0) {
                    result = hour1 - hour2;
                }

                if (result == 0) {
                    result = minutes1 - minutes2;
                }

                return result;
            }
            
            function mapper(elem, ind) {
                let matchId = `match-${elem.id}`;
                let homeId = `match-${elem.id}-home`;
                let awayId = `match-${elem.id}-away`;
                let timeId = `match-${elem.id}-time`;
                let winId = `match-${elem.id}-win`;
                let drawId = `match-${elem.id}-draw`;
                let loseId = `match-${elem.id}-lose`;
                let betId = `match-${elem.id}-bet`;
                let betTypeId = `match-${elem.id}-bet-type`;
                let buttonId = `match-${elem.id}-button`;

                let hasBet = false;

                myBets.forEach(function (myBet) {
                    if (myBet.id == elem.id) {
                        hasBet = true;
                    }
                });

                if (!hasBet)
                    return <tr key={ind}>
                    <td id={matchId}>{elem.id}</td>
                <td id={homeId}>{elem.home}</td>
                <td id={awayId}>{elem.away}</td>
                <td id={timeId}>{elem.time}</td>
                <td id={winId}>{elem.ratio['1']}</td>
                <td id={drawId}>{elem.ratio['x']}</td>
                <td id={loseId}>{elem.ratio['2']}</td>
                <td id={betId}>
                    <input type="number" min="1" max="1000000"/>
                    </td>
                    <td id={betTypeId}>
                    <select>
                    <option>Win</option>
                    <option>Draw</option>
                    <option>Lose</option>
                    </select>
                    </td>
                    <td id={buttonId}>
                    <button onClick={that.placeBet}>Bet</button>
                </td>
                </tr>;

                return <tr key={ind}>
                    <td id={matchId}>{elem.id}</td>
                <td id={homeId}>{elem.home}</td>
                <td id={awayId}>{elem.away}</td>
                <td id={timeId}>{elem.time}</td>
                <td id={winId}>{elem.ratio['1']}</td>
                <td id={drawId}>{elem.ratio['x']}</td>
                <td id={loseId}>{elem.ratio['2']}</td>
                <td id={betId}>
                    <input type="number" min="1" max="1000000" disabled/>
                </td>
                <td id={betTypeId}>
                    <select disabled />
                </td>
                <td id={buttonId}>
                    <button disabled>Bet</button>
                </td>
                </tr>
            }
            arr = arr.sort(sorter).map(mapper);
            return arr;
        },
        placeBet: function (ev) {
            let currentId = Number($(ev.target).parent().attr('id').replace('match-', '').replace('-button', ''));
            let value = Number($('#match-' + currentId + '-bet input').val());
            let betType = $('#match-' + currentId + '-bet-type select option:selected').text().toString().toLowerCase();

            let ratio = Number($('#match-' + currentId + '-' + betType).text());

            let homeTeam = $('#match-' + currentId + '-home').text();
            let awayTeam = $('#match-' + currentId + '-away').text();
            let time = $('#match-' + currentId + '-time').text();

            let bet = {
                id: currentId,
                homeTeam: homeTeam,
                awayTeam: awayTeam,
                time: time,
                betType: betType,
                betRatio: ratio,
                betValue: value,
                estimatedWin: (ratio * value).toFixed(2)
            };

            myBets.push(bet);

            this.showMatches();
        },
        showBets: function () {
            this.setState({
                    children: <BetsTable elements={this.betsDataHandler(myBets)}/>
        });
        },
        betsDataHandler: function (arr) {
            function mapper(element, ind) {
                return <tr key={ind}>
                    <td>{element.homeTeam}</td>
                <td>{element.awayTeam}</td>
                <td>{element.time}</td>
                <td>{element.betType}</td>
                <td>{element.betRatio}</td>
                <td>{element.betValue}</td>
                <td>{element.estimatedWin}</td>
                </tr>
            }
            arr = arr.map(mapper);
            return arr;
        },
        render: function () {
            let that = this;
            return <div className="wrapper">
                <header>
                Dollar Football
            </header>
            <div className="button-holder">
                <button id="bets" className="button" onClick={this.showBets}>My Bets</button>
            <button id="matches" className="button" onClick={this.showMatches}>Matches</button>
            </div>
            <div className="content-holder">
                {this.state.children}
            </div>
            </div>
        }
    });

    return {AppView, MatchesTable, BetsTable}
}