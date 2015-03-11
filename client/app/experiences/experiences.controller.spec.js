'use strict';

describe('Controller: ExperiencesCtrl', function () {

  // load the controller's module
  beforeEach(module('cv2App'));

  var ExperiencesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExperiencesCtrl = $controller('ExperiencesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
