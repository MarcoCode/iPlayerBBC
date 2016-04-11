iPlayerApp.controller('PagerController', function(PageInfo, $window) {
  var self = this;
  
  PageInfo.getList().then(function(response) {
    self.info = response;
  })
  
  self.pageChange = function() {
    sessionStorage.setItem('page', self.info.page)
    $window.location.reload();
  }
})