'use strict';

describe('Controller: FormationCtrl', function () {

  // load the controller's module
  beforeEach(module('cv2App'));

  var FormationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormationCtrl = $controller('FormationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
