chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'styleAds') {
      styleAds();
    }
  });
  
  function styleAds() {
    const adDivs = document.querySelectorAll('ads_container'); 
    console.log("ads are present")
    // adDivs.forEach(function(adDiv) {
    //   adDiv.style.padding = '10px';
    //   adDiv.style.backgroundColor = '#ffd700'; // Change to the desired background color
    // });
  }
  