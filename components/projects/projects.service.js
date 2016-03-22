/**
 * Factory for getting my projects
 */

'use strict';

angular.module('mrbarbera')
  .factory('Projects', function () {
    var project = function(name, link, img, target){
        this.name = name;
        this.img = img;
        this.link = link;
        this.target = target;
    };
    var projects = [
        new project(
            "JSDungeon", 
            "https://github.com/jaaimino/jsdungeon", 
            "assets/img/project_thumbs/jsdungeon_thumb.png", 
            "_blank"
        )
    ];
    var getProjects = function(){
        return projects;
    }
    // Public API here
    return {
        getProjects : getProjects
    };
  });
