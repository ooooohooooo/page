$(function(){
    var userFeed = new Instafeed({
            get:'user',
            userId:9438428980, //token의 첫번째.앞부분
            sortBy:'most-recent',
            limit:12, //보여지는 피드의 갯수
            template:'<a class="animation" href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
            accessToken:'9438428980.110699b.9a9c5089713f48d5bf842757b8646dac'
        });
        userFeed.run();
})