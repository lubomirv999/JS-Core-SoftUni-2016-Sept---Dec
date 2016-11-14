class TitleBar{
    constructor(title){
        this.title = title;
        this.menu = [];
        this.menuHtml = {};
    }

    addLink(href, name){
        this.menu.push($(`<a class="menu-link" href="${href}">${name}</a>`));
    }

    appendTo(selector){
        $(selector).append(this.generate());
    }

    generate() {
        let html = $(`<header class="header">
                          <div class="header-row">
                              <a class="button">&#9776;</a>
                              <span class="title">${this.title}</span>
                          </div>
                          <div class="drawer">
                              <nav class="menu">
                              </nav>
                          </div>
                      </header>`);

        this.menuHtml = html.find('.menu');
        for (let item of this.menu) {
            this.menuHtml.append(item);
        }

        let button = html.find('.button');

        button.click(this.toggle.bind(this));

        return html;
    }

    toggle(){
        let menu = this.menuHtml.parent();

        if(menu.css('display') == 'none'){
            menu.css('display', 'block');
        }else{
            menu.css('display', 'none');
        }
    }
}





// class TitleBar {
//     constructor(title) {
//         this.title = title;
//         this.links = $('<nav>', {'class': 'menu'});
//     }
//
//     _generateMenuBody() {
//         return $('<header>', {'class': 'header'})
//             .append($('<div>', {'class': 'header-row'})
//                 .append($('<a>', {'class': 'button'})
//                     .html('&#9776;')
//                     .click(function () {
//                         $('div.drawer').toggle();
//                     }))
//                 .append($('<span>', {'class': 'title'})
//                     .text(this.title)))
//             .append($('<div>', {'class': 'drawer'})
//                 .css('display', 'none')
//                 .append(this.links));
//     }
//
//     addLink(href, name) {
//         this.links.append($('<a>', {'class':'menu-link'})
//             .attr('href', href)
//             .text(name));
//     }
//
//     appendTo(container) {
//         $(container).append(this._generateMenuBody());
//     }
// }