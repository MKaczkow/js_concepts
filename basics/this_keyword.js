// 'this' references object which is executin current function

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
};

function playVideo() {
    console.log(this);
}

function Video(title) {
    this.title = title;
    console.log(this);
}

const video_2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag);
        }, this);
    }
};

// video.stop();
//playVideo();
// const v = new Video('a');
video_2.showTags()


const person = {
    name: 'Mosh',
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk.bind(person);
walk();
