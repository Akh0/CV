'use strict';

describe('Controller: CompetencesCtrl', function () {

  // load the controller's module
  beforeEach(module('cv2App'));

  var CompetencesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompetencesCtrl = $controller('CompetencesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
