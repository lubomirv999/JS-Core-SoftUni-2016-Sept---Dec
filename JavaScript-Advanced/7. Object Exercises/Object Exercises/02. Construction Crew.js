function crewProcessor(worker) {
    if (worker.handsShaking) { // check if he is drunk
        worker.bloodAlcoholLevel += worker.experience * worker.weight * 0.1;
        worker.handsShaking = false;
    }
    return worker;
}
