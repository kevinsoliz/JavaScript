function StopWatch2() {
    let startTime, endTime, running, duration = 0;
    Object.defineProperties(this, {
        startTime: { get: function () { return startTime; } },
        endTime: { get: function () { return endTime; } },
        running: { get: function () { return running; } },
        duration: {
            get: function () { return duration; },
            set : function (value) { duration = value; } //Aquí ya la hemos liado.
        }
    })

}


//Overide:

StopWatch2.prototype.start = function () {
    if (this.running)
        throw new Error('Stopwatch has already started.');
    this.running = true;
    this.startTime = new Date();
}

StopWatch2.prototype.stop = function () {
    if (!this.running)
        throw new Error('Stopwatch is not started.');
    this.running = false;
    this.endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
}

StopWatch2.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}