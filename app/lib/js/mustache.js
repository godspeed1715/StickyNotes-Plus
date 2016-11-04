var App;
var mustache = angular.module('mustache', []);

//Filters
mustache.filter('filterByRead', function () { //Filtered read articles
    return function (input, status) {
         if (status === '') {
            var out = [];
            for (var i = 0; i < input.length; i++) {
                    out.push(input[i]);
            }
            return out;
        } else {
            var out = [];
            for (var i = 0; i < input.length; i++) {
                if (input[i].articleData.Read === status)
                    out.push(input[i]);
            }
            return out;
        }
    };
});
mustache.filter('filterByFeed', function () { //Filtered By Feed
        return function (input, sFeed) {
            if (!sFeed) {
                var out = [];
                for (var i = 0; i < input.length; i++) {
                        out.push(input[i]);
                }
                return out;
            } else if (sFeed) {
                var out = [];
                for (var i = 0; i < input.length; i++) {
                    if (input[i].feedTitle === sFeed)
                        out.push(input[i]);
                }
                return out;
            }
        };
});
mustache.filter('filterByDate', function () { //Filtered read articles
    return function (input, dDateRange) {
         if (dDateRange === '') {
            var out = [];
            for (var i = 0; i < input.length; i++) {
                out.push(input[i]);
            }
            return out;
        } else {
            var out = [];
            for (var i = 0; i < input.length; i++) {
                if (input[i].sortDate > dDateRange)
                    out.push(input[i]);
            }
            return out;
        }
    };
});
mustache.filter('truncate', function () { //tuncate to 100 characters
    return function (text, length, end) {
        if (end === undefined)
            end = "...";
        if (text.length) {
            if (text.length <= length) {
                return text;
            } else {
                return String(text).substring(0, length - end.length) + end;
            }
        }
    };
});

//mustache Controller
mustache.controller('mustacheController', ['$scope',
    function ($scope) {

        

       
   
    }
]);


App = {
    dArticleId: "",
    fnMain: function () {
    
    }
}

App.fnMain();