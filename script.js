document.getElementById('search-input').addEventListener('keyup', async (e) => {
    // Search comments
    // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
    // Display the results in the UI

    // Things to look out for
    // ---
    // Use es6
    // Error handling

    const serach_val = document.getElementById('search-input').value;

    const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=3')
    const json = await res.json()

    var found = json.filter(function(item) { return item.name == serach_val; });

    console.log('found', found[0]);

    const result = '<li> Post Id: '+ found[0]['postId'] +'</li>'+ 
               '<li> ID: '+ found[0]['id'] +'</li>' +
               '<li> Name: '+ found[0]['name'] +'</li>' +
               '<li> Email: '+ found[0]['email'] +'</li>' +
               '<li> Description: '+ found[0]['body'] +'</li>'

    document.getElementById('results').innerHTML = result 

});