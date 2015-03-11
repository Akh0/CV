'use strict';

describe('Controller: RealisationsCtrl', function () {

  // load the controller's module
  beforeEach(module('cv2App'));

  var RealisationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RealisationsCtrl = $controller('RealisationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
