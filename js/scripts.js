$('#button').click(function()
{
    console.log('clicked');
    $(this).css('color', '#440000');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC-lHJZR3Gqxm24_Vd_AJ5Yw&maxResults=1&order=date&key=AIzaSyDpgW3zCk8Gqtj2woDGwHI30Mf5mXs4jKg', true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
    function processRequest(e)
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var response = JSON.parse(xhr.responseText);
            $('#searchresult').text(response.items[0].snippet.title);
        }
    }
});
