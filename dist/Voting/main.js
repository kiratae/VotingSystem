(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-dark bg-primary\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <!-- <span></span> -->\r\n        <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n\r\n    <div class=\"navbar-brand pl-4\">\r\n        <!-- <img src=\"https://via.placeholder.com/100x32\" class=\"d-inline-block align-top\"> -->\r\n        Admin Voting System\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\r\n\r\n        <ul class=\"navbar-nav mr-auto pl-3\">\r\n            <li class=\"nav-item text-right\">\r\n                <div class=\"navbar-text py-1 px-2\">\r\n                    <span>{{username}}&ensp;<i class=\"fas fa-user\"></i></span>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item\" [ngClass]=\"(viewMode=='main')?'active':''\">\r\n                <a class=\"nav-link\" (click)=\"changeTab('main')\" data-toggle=\"collapse\" data-target=\"#navbarContent\"><i class=\"fas fa-home\"></i>&ensp;Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"chart\"><i class=\"fas fa-chart-bar\"></i>&ensp;Score Bar Chart</a>\r\n            </li>\r\n            <li class=\"nav-item\" [ngClass]=\"(viewMode=='user')?'active':''\">\r\n                <a class=\"nav-link\" (click)=\"changeTab('user')\" data-toggle=\"collapse\" data-target=\"#navbarContent\"><i class=\"fas fa-cog\"></i>&ensp;user management</a>\r\n            </li>\r\n            <li class=\"nav-item\" [ngClass]=\"(viewMode=='userView')?'active':''\">\r\n                <a class=\"nav-link\" (click)=\"changeTab('userView')\" data-toggle=\"collapse\" data-target=\"#navbarContent\"><i class=\"fas fa-cog\"></i>&ensp;view users</a>\r\n            </li>\r\n            <li class=\"nav-item\" [ngClass]=\"(viewMode=='userType')?'active':''\">\r\n                <a class=\"nav-link\" (click)=\"changeTab('userType')\" data-toggle=\"collapse\" data-target=\"#navbarContent\"><i class=\"fas fa-cog\"></i>&ensp;user type</a>\r\n            </li>\r\n            <li class=\"nav-item\" [ngClass]=\"(viewMode=='scoreView')?'active':''\">\r\n                <a class=\"nav-link\" (click)=\"changeTab('scoreView')\" data-toggle=\"collapse\" data-target=\"#navbarContent\"><i class=\"fas fa-cog\"></i>&ensp;score views</a>\r\n            </li>\r\n            <li class=\"nav-item\" [ngClass]=\"(viewMode=='cluster')?'active':''\">\r\n                <a class=\"nav-link\" (click)=\"changeTab('cluster')\" data-toggle=\"collapse\" data-target=\"#navbarContent\"><i class=\"fas fa-cog\"></i>&ensp;cluster management</a>\r\n            </li>\r\n            <li class=\"nav-item\" [ngClass]=\"(viewMode=='system')?'active':''\">\r\n                <a class=\"nav-link\" (click)=\"changeTab('system')\" data-toggle=\"collapse\" data-target=\"#navbarContent\"><i class=\"fas fa-cog\"></i>&ensp;system management</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\"><i class=\"fas fa-sign-out-alt\"></i>&ensp;Logout</a>\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n\r\n</nav>\r\n\r\n<div class=\"container-fliud mx-3\">\r\n\r\n    <div [ngSwitch]=\"viewMode\">\r\n        <div *ngSwitchCase=\"'main'\">\r\n\r\n            <div class=\"row mb-3 justify-content-center\">\r\n\r\n                <div class=\"col-8\">\r\n                \r\n                    <!-- user-management card -->\r\n                    <div class=\"card mt-3\">\r\n                        <div class=\"card-header\"><h4>Voting Time Setting</h4></div>\r\n                        <div class=\"card-body\">\r\n\r\n                            <div class=\"text-center mb-3\">\r\n                                <p>{{ nowDate }}</p>\r\n                                <h3>{{ nowTime }}</h3>\r\n                            </div>\r\n\r\n                            <div class=\"row mb-3\">\r\n\r\n                                <div class=\"col-12 col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Start Vote</label>\r\n                                        <input type=\"datetime\" class=\"form-control\" [(ngModel)]=\"startVote\">\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-12 col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>End Vote</label>\r\n                                        <input type=\"datetime\" class=\"form-control\" [(ngModel)]=\"endVote\">\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <button class=\"btn btn-success btn-lg btn-block\" (click)=\"setTime()\">Set</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <app-user-management *ngSwitchCase=\"'user'\"></app-user-management>\r\n        <app-user-view *ngSwitchCase=\"'userView'\"></app-user-view>\r\n        <app-user-type-management *ngSwitchCase=\"'userType'\"></app-user-type-management>\r\n        <app-score-view *ngSwitchCase=\"'scoreView'\"></app-score-view>\r\n        <app-cluster-management *ngSwitchCase=\"'cluster'\"></app-cluster-management>\r\n        <app-system-management *ngSwitchCase=\"'system'\"></app-system-management>\r\n    </div>\r\n\r\n</div>\r\n\r\n<modal-logout></modal-logout>"

/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_vote_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vote-time.service */ "./src/app/services/vote-time.service.ts");






var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent(router, usersService, voteTimeService, datepipe) {
        this.router = router;
        this.usersService = usersService;
        this.voteTimeService = voteTimeService;
        this.datepipe = datepipe;
        this.viewMode = "main";
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("us_id") != null && sessionStorage.getItem("user_type") != "Admin") {
            this.router.navigate(['']);
        }
        this.usersService.us_id = this.us_id = sessionStorage.getItem("us_id");
        ;
        this.usersService.getByKey().subscribe(function (res) {
            console.log(res['data'][0]);
            var data = res['data'][0];
            _this.username = data.us_username;
        }, function (error) { return console.log(error); });
        this.fetchVoteTime();
        setInterval(function () {
            var nowDate = new Date();
            _this.nowTime = _this.dateToTimeStringOutput(nowDate);
            _this.nowDate = _this.dateToStringOutput(nowDate);
        }, 1000);
    };
    AdminHomeComponent.prototype.fetchVoteTime = function () {
        var _this = this;
        this.voteTimeService.getAll().subscribe(function (res) {
            var data = res['data'][0];
            _this.startVote = _this.datepipe.transform(new Date(data['vt_start_vote']), 'yyyy-MM-dd HH:mm:ss');
            _this.endVote = _this.datepipe.transform(new Date(data['vt_end_vote']), 'yyyy-MM-dd HH:mm:ss');
            console.log(data, _this.startVote, _this.endVote);
        }, function (error) { return console.log(error); });
    };
    AdminHomeComponent.prototype.setTime = function () {
        this.voteTimeService.vt_start_vote = this.startVote;
        this.voteTimeService.vt_end_vote = this.endVote;
        this.voteTimeService.update().subscribe(function (res) {
            console.log(res);
        }, function (error) { return console.log(error); });
    };
    AdminHomeComponent.prototype.dateToTimeStringOutput = function (date) {
        var s = date.getSeconds();
        var m = date.getMinutes();
        var h = date.getHours();
        return this.getZeroPrefix(h) + " : " + this.getZeroPrefix(m) + " : " + this.getZeroPrefix(s);
    };
    AdminHomeComponent.prototype.dateToStringOutput = function (date) {
        var month = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        return this.getZeroPrefix(d) + " " + month[m] + " " + y;
    };
    AdminHomeComponent.prototype.getZeroPrefix = function (time) {
        return (time < 10 ? "0" : "") + time;
    };
    AdminHomeComponent.prototype.changeTab = function (viewMode) {
        this.viewMode = viewMode;
    };
    AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/admin/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin/admin-home/admin-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            src_app_services_vote_time_service__WEBPACK_IMPORTED_MODULE_5__["VoteTimeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/admin/chart/chart.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/chart/chart.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/chart/chart.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/chart/chart.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-right\"><a href=\"admin\" class=\"btn btn-light\"><i class=\"fas fa-chevron-left\"></i></a></div>\r\n<highcharts-chart \r\n[Highcharts]=\"Highcharts\"\r\n[options]=\"chartOptions\"\r\n\r\nstyle=\"width: 100%; height: 94vh; display: block;\"\r\n></highcharts-chart>"

/***/ }),

/***/ "./src/app/admin/chart/chart.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/chart/chart.component.ts ***!
  \************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_score_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/score.service */ "./src/app/services/score.service.ts");
/* harmony import */ var src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cluster.service */ "./src/app/services/cluster.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_6__);







var ChartComponent = /** @class */ (function () {
    function ChartComponent(router, scoreService, clusterService, appSettings) {
        this.router = router;
        this.scoreService = scoreService;
        this.clusterService = clusterService;
        this.appSettings = appSettings;
        this.clusterScoreData = [];
        this.clusterData = [];
        this.clusterCategories = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_6__;
        this.chartOptions = {
            chart: {
                type: 'column',
                style: {
                    fontFamily: "Prompt",
                    fontSize: "24px"
                }
            },
            title: {
                text: 'OSSD#7',
                style: {
                    fontFamily: "Prompt",
                    fontSize: "40px",
                    fontWeight: "600"
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'คะแนน'
                },
                labels: {
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "24px"
                    }
                }
            },
            xAxis: {
                labels: {
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "28px",
                        fontWeight: "500"
                    }
                },
                categories: this.clusterCategories
            },
            legend: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:,.0f}',
                        style: {
                            fontFamily: "Prompt",
                            fontSize: "24px"
                        }
                    }
                }
            },
            series: [{
                    data: this.clusterScoreData
                }]
        };
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("us_id") != null && sessionStorage.getItem("user_type") != "Admin") {
            this.router.navigate(['']);
        }
        this.clusterService.getAll().subscribe(function (res) {
            console.log(res['data']);
            _this.clusterData = res['data'];
        }, function (error) { return console.log(error); });
        this.scoreService.getScore().subscribe(function (res) {
            var data = res['data'];
            _this.clusterCategories = [];
            data.forEach(function (element) {
                _this.clusterCategories.push(element.ct_name_th);
                _this.clusterScoreData.push({ "y": element.sc_score, "color": element.ct_color_code });
            });
            _this.chartOptions = {
                chart: {
                    type: 'column',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "24px"
                    }
                },
                title: {
                    text: 'OSSD#7',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "40px",
                        fontWeight: "600"
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'คะแนน'
                    },
                    labels: {
                        style: {
                            fontFamily: "Prompt",
                            fontSize: "24px"
                        }
                    }
                },
                xAxis: {
                    labels: {
                        style: {
                            fontFamily: "Prompt",
                            fontSize: "28px",
                            fontWeight: "500"
                        }
                    },
                    categories: _this.clusterCategories
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:,.0f}',
                            style: {
                                fontFamily: "Prompt",
                                fontSize: "24px"
                            }
                        }
                    }
                },
                series: [{
                        data: _this.clusterScoreData
                    }]
            };
            _this.updateScore();
        }, function (error) { return console.log(error); });
    };
    ChartComponent.prototype.updateScore = function () {
        var _this = this;
        this.scoreService.getScore().subscribe(function (res) {
            var data = res['data'];
            console.log(data);
            _this.clusterScoreData = [];
            _this.clusterCategories = [];
            data.forEach(function (element) {
                _this.clusterCategories.push(element.ct_name_th);
                _this.clusterScoreData.push({ "y": element.sc_score, "color": element.ct_color_code });
            });
            _this.chartOptions = {
                chart: {
                    type: 'column',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "24px"
                    }
                },
                title: {
                    text: 'OSSD#7',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "40px",
                        fontWeight: "600"
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'คะแนน'
                    },
                    labels: {
                        style: {
                            fontFamily: "Prompt",
                            fontSize: "24px"
                        }
                    }
                },
                xAxis: {
                    labels: {
                        style: {
                            fontFamily: "Prompt",
                            fontSize: "28px",
                            fontWeight: "500"
                        }
                    },
                    categories: _this.clusterCategories
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y}',
                            style: {
                                fontFamily: "Prompt",
                                fontSize: "24px"
                            }
                        }
                    }
                },
                series: [{
                        data: _this.clusterScoreData
                    }]
            };
            setTimeout(function () {
                _this.updateScore();
            }, _this.appSettings.chartRefreshTime);
        }, function (error) { return console.log(error); });
    };
    ChartComponent.prototype.findCluster = function (ct_id) {
        for (var i = 0; i < this.clusterData.length; i++)
            if (this.clusterData[i].ct_id == ct_id)
                return this.clusterData[i];
    };
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/admin/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/admin/chart/chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_score_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"],
            src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_4__["ClusterService"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsServiceService"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/admin/cluster-management/cluster-management.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/cluster-management/cluster-management.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NsdXN0ZXItbWFuYWdlbWVudC9jbHVzdGVyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/cluster-management/cluster-management.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/cluster-management/cluster-management.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\r\n\r\n  <div class=\"col-12\">\r\n\r\n    <!-- user-management card -->\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\">\r\n        <h4>Cluster Management</h4>\r\n        <button class=\"btn btn-info float-left\" (click)=\"fetchCluster()\"><i class=\"fas fa-sync\"></i></button>\r\n        <button data-toggle=\"modal\" data-target=\"#insert_cluster\" class=\"btn btn-primary float-right\"><i class=\"fas fa-plus\"></i></button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let cluster of clustersData; let i = index;\" class=\"list-group-item\">\r\n            <span class=\"row\">\r\n              <div class=\"col-md-1 col-12 text-center mb-1\">{{ i+1 }}</div>\r\n              <div class=\"col-md-2 col-12 text-center mb-1\">\r\n                <img src=\"{{ imgURL+cluster?.ct_img }}\" width=\"64px\" height=\"64px\">\r\n              </div>\r\n              <div class=\"col-md-3 col-12 text-center\">{{ cluster.ct_name_th }} ({{ cluster.ct_name_en }})</div>\r\n              <div class=\"col-md-2 col-12 text-center\">{{ cluster.sys_name_th }} ({{ cluster.sys_name_en }})</div>\r\n              <div class=\"col-md-2 col-12 text-center mb-1\" [style.color]=\"cluster.ct_color_code\">{{ cluster.ct_color_code }}</div>\r\n              <div class=\"col-md-1 col-6 text-center\">\r\n                  <button (click)=\"editCluster(i, color_showing)\" data-toggle=\"modal\" data-target=\"#insert_cluster\" class=\"btn btn-warning\"><i class=\"fas fa-pen\"></i></button>\r\n                </div>\r\n              <div class=\"col-md-1 col-6 text-center\">\r\n                <button (click)=\"deleteCluster(i, cluster.ct_id)\" class=\"btn btn-danger\"><i class=\"fas fa-times\"></i></button>\r\n              </div>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"insert_cluster\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">insert_cluster</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <input type=\"hidden\" [(ngModel)]=\"ct_id\">\r\n\r\n            <div class=\"form-group\">\r\n              <label>Cluster index (start at 0)</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ct_sequence\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Name TH</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ct_name_th\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Name EN</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ct_name_en\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>System</label>\r\n              <select class=\"form-control\" [(ngModel)]=\"sm_sys_id\">\r\n                <option *ngFor=\"let system of systemsData; let i = index;\" value=\"{{ system.sys_id }}\" [selected]=\"i == 0\">{{ system.sys_name_th }} {{ system.sys_name_en }}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Logo Image</label>\r\n              <div *ngIf=\"ct_img_preview != null\">\r\n                <img src=\"{{ ct_img_preview }}\" width=\"64px\" height=\"64px\">\r\n              </div>\r\n              <div *ngIf=\"ct_img_preview == null\">\r\n                <input type=\"file\" class=\"form-control-file\" id=\"imgUpload\" (change)=\"fileChangeListener($event.target.files)\">\r\n              </div>\r\n              <button class=\"btn btn-success\" (click)=\"uploadImage()\" [disabled]=\"canUpload == false\">Upload Image</button>\r\n              <button class=\"btn btn-danger\" (click)=\"deleteImage()\" [disabled]=\"isUploaded == false\">Remove Image</button>\r\n            </div>\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" #color_showing style=\"color: #ffffff;\"><i class=\"fas fa-circle\"></i></span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Color Hex Code\" [(ngModel)]=\"ct_color\" (keyup)=\"show(color_showing)\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"closeModal()\">Cancel</button>\r\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"saveCluster()\" data-dismiss=\"modal\">Save</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/cluster-management/cluster-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/cluster-management/cluster-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClusterManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterManagementComponent", function() { return ClusterManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cluster.service */ "./src/app/services/cluster.service.ts");
/* harmony import */ var src_app_services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");





var ClusterManagementComponent = /** @class */ (function () {
    function ClusterManagementComponent(clusterService, systemService, appSetting) {
        this.clusterService = clusterService;
        this.systemService = systemService;
        this.appSetting = appSetting;
        this.ct_color = "#";
        this.isUploaded = false;
        this.canUpload = false;
    }
    ClusterManagementComponent.prototype.ngOnInit = function () {
        this.imgURL = this.appSetting.apiURL + '/images/cluster/';
        this.fetchCluster();
        this.fetchSystem();
    };
    ClusterManagementComponent.prototype.fetchCluster = function () {
        var _this = this;
        this.clusterService.getAll().subscribe(function (res) {
            _this.clustersData = res['data'];
        }, function (error) {
            console.error(error);
        });
    };
    ClusterManagementComponent.prototype.fetchSystem = function () {
        var _this = this;
        this.systemService.getAll().subscribe(function (res) {
            _this.systemsData = res['data'];
            _this.sm_sys_id = _this.systemsData[0].sys_id;
        }, function (error) {
            console.error(error);
        });
    };
    ClusterManagementComponent.prototype.saveCluster = function () {
        var _this = this;
        if (this.ct_img_preview != null && this.ct_img_name != null && this.ct_sequence != null && this.ct_name_th != null && this.isUploaded && this.ct_color.length == 7 && this.ct_color[0] == "#") {
            if (this.ct_id != null) {
                this.clusterService.ct_id = this.ct_id;
                this.clusterService.ct_sequence = this.ct_sequence;
                this.clusterService.ct_name_th = this.ct_name_th;
                this.clusterService.ct_name_en = this.ct_name_en;
                this.clusterService.ct_img = this.ct_img_name;
                this.clusterService.ct_color_code = this.ct_color;
                this.clusterService.sm_sys_id = this.sm_sys_id;
                this.clusterService.update().subscribe(function (res) {
                    if (_this.appSetting.isDebuging)
                        console.log(res);
                    _this.closeModal();
                    _this.fetchCluster();
                }, function (error) { return console.error(error); });
                return;
            }
            this.clusterService.ct_sequence = this.ct_sequence;
            this.clusterService.ct_name_th = this.ct_name_th;
            this.clusterService.ct_name_en = this.ct_name_en;
            this.clusterService.ct_img = this.ct_img_name;
            this.clusterService.ct_color_code = this.ct_color;
            this.clusterService.sm_sys_id = this.sm_sys_id;
            this.clusterService.insert().subscribe(function (res) {
                if (_this.appSetting.isDebuging)
                    console.log(res);
                _this.closeModal();
                _this.fetchCluster();
            }, function (error) { return console.error(error); });
        }
        else {
            alert("Somthing went wrong!");
        }
    };
    ClusterManagementComponent.prototype.fileChangeListener = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file_1 = files.item(0);
            if (file_1.type == 'image/jpeg' || file_1.type == 'image/png' || file_1.type == 'image/gif') {
                var reader = new FileReader();
                reader.readAsDataURL(file_1);
                reader.onload = function (e) {
                    _this.ct_img_preview = e.target['result'];
                    _this.ct_img = file_1;
                    _this.canUpload = true;
                };
            }
            else {
                this.clearUploadField();
                alert("Please select image file !");
            }
        }
    };
    ClusterManagementComponent.prototype.uploadImage = function () {
        var _this = this;
        if (this.canUpload && this.ct_img != null) {
            this.clusterService.ct_img = this.ct_img;
            this.clusterService.uploadImg().subscribe(function (res) {
                if (_this.appSetting.isDebuging)
                    console.log(res.filename);
                _this.ct_img_name = res.filename;
                _this.canUpload = false;
                _this.isUploaded = true;
            }, function (error) { return console.error(error); });
        }
    };
    ClusterManagementComponent.prototype.deleteImage = function () {
        var _this = this;
        if (this.isUploaded) {
            this.clusterService.ct_img = this.ct_img_name;
            this.clusterService.deleteImg().subscribe(function (res) {
                _this.isUploaded = false;
                _this.canUpload = true;
                _this.ct_img_preview = null;
                _this.ct_img_name = null;
                if (_this.appSetting.isDebuging)
                    console.log(_this.ct_img_preview);
            }, function (err) { return console.log(err); });
        }
    };
    ClusterManagementComponent.prototype.show = function (element) {
        if (this.ct_color.length < 7) {
            element.style.color = "#ffffff";
            return;
        }
        else if (this.ct_color.length > 7) {
            this.ct_color = this.ct_color.substring(0, 7);
        }
        element.style.color = this.ct_color.toString();
    };
    ClusterManagementComponent.prototype.editCluster = function (index, element) {
        var data = this.clustersData[index];
        if (this.appSetting.isDebuging)
            console.log(data);
        this.ct_id = data.ct_id;
        this.ct_sequence = data.ct_sequence;
        this.ct_name_th = data.ct_name_th;
        this.ct_name_en = data.ct_name_en;
        this.ct_color = data.ct_color_code;
        this.ct_img_preview = this.imgURL + data.ct_img;
        this.ct_img_name = data.ct_img;
        this.sm_sys_id = data.sys_id;
        this.canUpload = false;
        this.isUploaded = true;
        element.style.color = this.ct_color.toString();
    };
    ClusterManagementComponent.prototype.deleteCluster = function (index, ct_id) {
        var _this = this;
        confirm("Want to delete cluster \"" + this.clustersData[index].ct_name_th + "\" ?");
        this.clusterService.ct_id = ct_id;
        this.clusterService.delete().subscribe(function (res) {
            _this.clustersData.splice(index, 1);
            if (_this.appSetting.isDebuging)
                console.log(ct_id + " is deleted!");
        }, function (err) { return console.error(err); });
    };
    ClusterManagementComponent.prototype.closeModal = function () {
        this.ct_id = null;
        this.ct_sequence = null;
        this.ct_name_th = null;
        this.ct_name_en = null;
        this.ct_color = "#";
        this.ct_img = null;
        this.sm_sys_id = null;
        if (this.ct_img_preview == null) {
            this.clearUploadField();
        }
        else {
            this.ct_img_preview = null;
        }
    };
    ClusterManagementComponent.prototype.clearUploadField = function () {
        window.document.getElementById('imgUpload')
            .value = null;
    };
    ClusterManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cluster-management',
            template: __webpack_require__(/*! ./cluster-management.component.html */ "./src/app/admin/cluster-management/cluster-management.component.html"),
            styles: [__webpack_require__(/*! ./cluster-management.component.css */ "./src/app/admin/cluster-management/cluster-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_2__["ClusterService"],
            src_app_services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsServiceService"]])
    ], ClusterManagementComponent);
    return ClusterManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin/score-view/score-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/score-view/score-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Njb3JlLXZpZXcvc2NvcmUtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/score-view/score-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/score-view/score-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12 col-12\">\r\n  \r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-header\">\r\n            <h4>Score Lists</h4>\r\n            <button class=\"btn btn-info float-left\" (click)=\"fetchScore()\"><i class=\"fas fa-sync\"></i></button>\r\n          </div>\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <button class=\"btn btn-primary float-right mb-3\" (click)=\"resetScore()\"><i class=\"fas fa-trash-restore\"></i>&ensp;Reset All</button>\r\n              </div>\r\n            </div>\r\n  \r\n            <ul class=\"list-group\">\r\n              <li *ngFor=\"let score of scoresData; let i = index;\" class=\"list-group-item\">\r\n                <span class=\"row\">\r\n                  <div class=\"col-md-2\">{{ i+1 }}</div>\r\n                  <div class=\"col-md-3\">{{ score.ct_name_th }}</div>\r\n                  <div class=\"col-md-3\">{{ score.sc_score }}</div>\r\n                </span>\r\n              </li>\r\n            </ul>\r\n  \r\n          </div>\r\n        </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/score-view/score-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/score-view/score-view.component.ts ***!
  \**********************************************************/
/*! exports provided: ScoreViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreViewComponent", function() { return ScoreViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_score_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/score.service */ "./src/app/services/score.service.ts");



var ScoreViewComponent = /** @class */ (function () {
    function ScoreViewComponent(scoreService) {
        this.scoreService = scoreService;
    }
    ScoreViewComponent.prototype.ngOnInit = function () {
        this.fetchScore();
    };
    ScoreViewComponent.prototype.fetchScore = function () {
        var _this = this;
        this.scoreService.getScore().subscribe(function (res) {
            console.log(res['data']);
            _this.scoresData = res['data'];
        }, function (err) { return console.log(err); });
    };
    ScoreViewComponent.prototype.resetScore = function () {
        var _this = this;
        var dialog = confirm("all score will be set to 0 !\n contiune?");
        if (dialog == true) {
            this.scoreService.resetScore().subscribe(function (res) {
                console.log(res);
                _this.fetchScore();
            }, function (err) { return console.log(err); });
        }
    };
    ScoreViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-score-view',
            template: __webpack_require__(/*! ./score-view.component.html */ "./src/app/admin/score-view/score-view.component.html"),
            styles: [__webpack_require__(/*! ./score-view.component.css */ "./src/app/admin/score-view/score-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]])
    ], ScoreViewComponent);
    return ScoreViewComponent;
}());



/***/ }),

/***/ "./src/app/admin/system-management/system-management.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/system-management/system-management.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N5c3RlbS1tYW5hZ2VtZW50L3N5c3RlbS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/system-management/system-management.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/system-management/system-management.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"col-12\">\r\n  \r\n      <!-- user-management card -->\r\n      <div class=\"card mt-3\">\r\n        <div class=\"card-header\">\r\n          <h4>System Management</h4>\r\n          <button class=\"btn btn-info float-left\" (click)=\"fetch()\"><i class=\"fas fa-sync\"></i></button>\r\n          <button data-toggle=\"modal\" data-target=\"#insert_system\" class=\"btn btn-primary float-right\" (click)=\"reset_modal()\"><i class=\"fas fa-plus\"></i></button></div>\r\n        <div class=\"card-body\">\r\n  \r\n          <ul class=\"list-group\">\r\n            <li *ngFor=\"let system of systemsData; let i = index;\" class=\"list-group-item\">\r\n              <span class=\"row\">\r\n                <div class=\"col-md-2 text-center\">{{ i+1 }}</div>\r\n                <div class=\"col-md-4\">{{ system.sys_name_th }}</div>\r\n                <div class=\"col-md-4\">{{ system.sys_name_en }}</div>\r\n                <div class=\"col-md-1 text-center\">\r\n                  <button (click)=\"edit(i)\" data-toggle=\"modal\" data-target=\"#insert_system\" class=\"btn btn-warning\"><i class=\"fas fa-pen\"></i></button>\r\n                </div>\r\n                <div class=\"col-md-1 text-center\">\r\n                  <button (click)=\"delete(i, system.sys_id)\" class=\"btn btn-danger\"><i class=\"fas fa-times\"></i></button>\r\n                </div>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  </div>\r\n\r\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"insert_system\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">insert_system</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n              <input type=\"hidden\" [(ngModel)]=\"sys_id\">\r\n\r\n              <div class=\"form-group\">\r\n                <label>Name TH</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sys_name_th\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Name EN</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sys_name_en\">\r\n              </div>\r\n  \r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"save()\" data-dismiss=\"modal\">Save</button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/system-management/system-management.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/system-management/system-management.component.ts ***!
  \************************************************************************/
/*! exports provided: SystemManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemManagementComponent", function() { return SystemManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");




var SystemManagementComponent = /** @class */ (function () {
    function SystemManagementComponent(systemService, appSettings) {
        this.systemService = systemService;
        this.appSettings = appSettings;
        this.systemsData = [];
    }
    SystemManagementComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    SystemManagementComponent.prototype.fetch = function () {
        var _this = this;
        this.systemService.getAll().subscribe(function (res) {
            _this.systemsData = res['data'];
        }, function (error) {
            console.error(error);
        });
    };
    SystemManagementComponent.prototype.save = function () {
        var _this = this;
        if (this.sys_name_th != null) {
            if (this.sys_id != null) {
                this.systemService.sys_id = this.sys_id;
                this.systemService.sys_name_th = this.sys_name_th;
                this.systemService.sys_name_en = this.sys_name_en;
                this.systemService.update().subscribe(function (res) {
                    if (_this.appSettings.isDebuging)
                        console.log(res);
                    _this.fetch();
                }, function (err) { return console.error(err); });
                return;
            }
            this.systemService.sys_name_th = this.sys_name_th;
            this.systemService.sys_name_en = this.sys_name_en;
            this.systemService.insert().subscribe(function (res) {
                if (_this.appSettings.isDebuging)
                    console.log(res);
                _this.fetch();
            }, function (error) { return console.error(error); });
        }
        else {
            alert("ERROR");
        }
    };
    SystemManagementComponent.prototype.reset_modal = function () {
        this.sys_id = null;
        this.sys_name_th = null;
        this.sys_name_en = null;
    };
    SystemManagementComponent.prototype.edit = function (index) {
        var data = this.systemsData[index];
        this.sys_id = data.sys_id;
        this.sys_name_th = data.sys_name_th;
        this.sys_name_en = data.sys_name_en;
    };
    SystemManagementComponent.prototype.delete = function (index, id) {
        var _this = this;
        confirm("Want to delete system \"" + this.systemsData[index].sys_name_th + "\" ?");
        this.systemService.sys_id = id;
        this.systemService.delete().subscribe(function (res) {
            if (_this.appSettings.isDebuging)
                console.log(index, id);
            _this.systemsData.splice(index, 1);
        }, function (err) { return console.error(err); });
    };
    SystemManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system-management',
            template: __webpack_require__(/*! ./system-management.component.html */ "./src/app/admin/system-management/system-management.component.html"),
            styles: [__webpack_require__(/*! ./system-management.component.css */ "./src/app/admin/system-management/system-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], SystemManagementComponent);
    return SystemManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-management/user-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/user-management/user-management.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-12\">\r\n\r\n    <!-- user-management card -->\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\"><h4>User Management</h4></div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-6 col-12\">\r\n\r\n              <div class=\"card mb-3\">\r\n                <div class=\"card-header\">manaul add user</div>\r\n                <div class=\"card-body\">\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Username</label>\r\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"manUsername\">\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Password</label>\r\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"manPassword\">\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">User Type</label>\r\n                    <select #selectUserType name=\"selectUserType\" [(ngModel)]=\"manUserTypeId\" class=\"form-control\" (change)=\"selectUserType1ChangeListner(selectUserType.value)\">\r\n                      <option value=\"{{ type.ut_id }}\" *ngFor=\"let type of userTypesData; let i = index;\" [selected] = \"i==3\">{{ type.ut_name_th }} ({{ type.ut_name_en }})</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Vote point to assign</label>\r\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"manVotePoints\">\r\n                  </div>                  \r\n\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                  <button (click)=\"manToListButton()\" class=\"btn btn-primary float-right\"><i class=\"fas fa-plus\"></i>&ensp;Add to Lists</button>\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6 col-12\">\r\n\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">file upload add user</div>\r\n              <div class=\"card-body\">\r\n\r\n                <div class=\"form-group mb-3\">\r\n                    <label>CSV File</label>\r\n                    <input type=\"file\" class=\"form-control-file\" id=\"csvUpload\" (change)=\"fileChangeListener($event.target.files)\">\r\n                    <p><small class=\"text-danger\">\r\n                        ***ต้องเป็นไฟล์ csv เท่านั้น และมี column ชื่อ username เท่านั้น\r\n                    </small></p>\r\n                </div>\r\n    \r\n                <h5 class=\"card-title\">Select User Type</h5>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">User Type</label>\r\n                  <select #formFileSelectUserType name=\"formFileSelectUserType\" [(ngModel)]=\"userTypeIdFromFile\" class=\"form-control\" (change)=\"selectUserType2ChangeListner(formFileSelectUserType.value)\">\r\n                    <option value=\"{{ type.ut_id }}\" *ngFor=\"let type of userTypesData; let i = index;\" [selected]=\"type.ut_id == 4\">{{ type.ut_name_th }} ({{ type.ut_name_en }})</option>\r\n                  </select>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">Password Length</label>\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"passwordLength\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">Vote point to assign</label>\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"votePointsFromFile\">\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <button (click)=\"fileToListsButton()\" class=\"btn btn-primary float-right\" [disabled]=\"canAddToLists\"><i class=\"fas fa-plus\"></i>&ensp;Add to Lists</button>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          \r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <!-- end user-management card -->\r\n\r\n  </div>\r\n\r\n  <div class=\"col-12 mb-3\">\r\n\r\n      <div class=\"card mt-3\">\r\n        <div class=\"card-header\">Users to save<button (click)=\"deleteAllUser()\" class=\"btn btn-danger float-right\"><i class=\"fas fa-trash\"></i></button></div>\r\n        <div class=\"card-body\">\r\n\r\n          <ol class=\"list-group\">\r\n            <li *ngFor=\"let user of usersData; let i = index;\" class=\"list-group-item\">\r\n              <span class=\"row\">\r\n                <div class=\"col-md-2 text-center\">{{ i+1 }}</div>\r\n                <div class=\"col-md-2\">{{ user.username }}</div>\r\n                <div class=\"col-md-2\">{{ user.password }}</div>\r\n                <div class=\"col-md-2 text-center\">{{ user.user_type }}</div>\r\n                <div class=\"col-md-2 text-center\">{{ user.vote_points }}</div>\r\n                <div class=\"col-md-2 text-center\">\r\n                  <button (click)=\"deleteUser(i)\" class=\"btn btn-danger\"><i class=\"fas fa-times\"></i></button>\r\n                </div>\r\n              </span>\r\n            </li>\r\n          </ol>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button (click)=\"downloadButton()\" class=\"btn btn-primary float-left\"><i class=\"fas fa-file-csv\"></i>&ensp;Download CSV</button>\r\n          <button (click)=\"saveButton()\" class=\"btn btn-success float-right\"><i class=\"fas fa-save\"></i>&ensp;Save To Database</button>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/user-management/user-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_user_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-type.service */ "./src/app/services/user-type.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");








var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(router, usersService, userTypeService, appSetting) {
        this.router = router;
        this.usersService = usersService;
        this.userTypeService = userTypeService;
        this.appSetting = appSetting;
        this.usersData = [];
        this.usersDataFromFiles = [];
        this.canAddToLists = true;
        this.manCanAddToLists = true;
        this.passwordLength = 6;
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userTypeService.getAll().subscribe(function (res) {
            if (_this.appSetting.isDebuging)
                console.log(res);
            _this.userTypesData = res['data'];
            _this.userTypeIdFromFile = _this.userTypesData[3].ut_id;
            _this.manUserTypeId = _this.userTypesData[3].ut_id;
        });
    };
    UserManagementComponent.prototype.fileToListsButton = function () {
        var _this = this;
        this.usersDataFromFiles.forEach(function (element, index) {
            var randomstring = Math.random().toString(36).slice((_this.passwordLength * -1));
            var username = element;
            var password = randomstring;
            var userType = _this.findUserTypeNameById(_this.userTypeIdFromFile);
            var votePoints = _this.votePointsFromFile;
            _this.usersData.push({ "#": index + 1, "username": username, "password": password, "user_type_id": _this.userTypeIdFromFile, "user_type": userType, "vote_points": votePoints });
        });
    };
    UserManagementComponent.prototype.manToListButton = function () {
        if (this.manUsername == null) {
            alert("Input User Name!");
            return;
        }
        if (this.manPassword == null) {
            alert("Input User Password!");
            return;
        }
        if (this.manUserTypeId == null) {
            alert("Select User Type!");
            return;
        }
        var username = this.manUsername;
        var password = this.manPassword;
        var userType = this.findUserTypeNameById(this.manUserTypeId);
        var votePoints = this.manVotePoints;
        this.usersData.push({ "#": this.usersData.length + 1, "username": username, "password": password, "user_type_id": this.manUserTypeId, "user_type": userType, "vote_points": votePoints });
        this.manUsername = null;
        this.manPassword = null;
        this.manUserTypeId = 4;
        this.manVotePoints = null;
    };
    UserManagementComponent.prototype.findUserTypeNameById = function (id) {
        var userType;
        this.userTypesData.forEach(function (element) {
            if (element.ut_id == id) {
                userType = element.ut_name_th;
            }
        });
        return userType;
    };
    UserManagementComponent.prototype.downloadButton = function () {
        this.downloadFile(this.usersData);
    };
    UserManagementComponent.prototype.deleteUser = function (index) {
        if (this.appSetting.isDebuging)
            console.log(index);
        this.usersData.splice(index, 1);
    };
    UserManagementComponent.prototype.deleteAllUser = function () {
        this.usersData = [];
    };
    UserManagementComponent.prototype.saveButton = function () {
        var _this = this;
        if (this.usersData == null || this.usersData.length == 0 || this.usersData[0].password == undefined) {
            alert("ERROR: do follow steps!\ngenerate password first !!!");
            return;
        }
        var dialog = confirm("user data will insert into database !\n contiune?");
        if (dialog == true)
            this.usersData.forEach(function (e) {
                var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
                var hashPassword = md5.appendStr(e.password).end().toString();
                _this.usersService.us_username = e.username;
                _this.usersService.us_password = hashPassword;
                _this.usersService.us_ut_id = e.user_type_id;
                _this.usersService.um_points = e.vote_points;
                _this.usersService.insert().subscribe(function (res) {
                    if (_this.appSetting.isDebuging)
                        console.log(res);
                    if (res.error != undefined)
                        alert(res.error);
                    _this.deleteAllUser();
                }, function (error) { return console.log(error); });
            });
    };
    UserManagementComponent.prototype.downloadFile = function (data) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, "users.csv");
    };
    UserManagementComponent.prototype.fileChangeListener = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file_1 = files.item(0);
            var fileType = file_1.name.split('.').pop();
            if (fileType != "csv") {
                alert("file type should be csv file !!");
                this.clearUploadField();
                return;
            }
            var reader_1 = new FileReader();
            reader_1.readAsText(file_1);
            reader_1.onload = function (e) {
                var csv = reader_1.result.toString();
                var allTextLines = csv.split(/\r|\n|\r/);
                var headers = allTextLines[0].split(',');
                for (var i = 0; i < allTextLines.length; i++) {
                    // split content based on comma
                    var data = allTextLines[i].split(',');
                    if (data.length === headers.length)
                        for (var j = 0; j < headers.length; j++)
                            if (headers[j] == "username")
                                if (i != 0)
                                    _this.usersDataFromFiles.push(data[j]);
                }
                if (_this.usersDataFromFiles.length == 0 || _this.usersDataFromFiles == null) {
                    alert("not have column name \"username\" in file \"" + file_1.name + "\"");
                    _this.clearUploadField();
                    _this.canAddToLists = true;
                }
                if (_this.userTypeIdFromFile != null) {
                    _this.canAddToLists = false;
                }
                if (_this.appSetting.isDebuging)
                    console.log(_this.usersDataFromFiles);
            };
        }
    };
    UserManagementComponent.prototype.clearUploadField = function () {
        window.document.getElementById('csvUpload')
            .value = null;
    };
    UserManagementComponent.prototype.selectUserType1ChangeListner = function (value) {
        if (this.appSetting.isDebuging)
            console.log(value);
    };
    UserManagementComponent.prototype.selectUserType2ChangeListner = function (value) {
        if (this.appSetting.isDebuging)
            console.log(value);
        this.userTypeIdFromFile = value;
        if (this.usersDataFromFiles.length != 0) {
            this.canAddToLists = false;
        }
        else {
            this.canAddToLists = true;
        }
    };
    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! ./user-management.component.html */ "./src/app/admin/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/admin/user-management/user-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            src_app_services_user_type_service__WEBPACK_IMPORTED_MODULE_6__["UserTypeService"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_7__["AppSettingsServiceService"]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-type-management/user-type-management.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/user-type-management/user-type-management.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItdHlwZS1tYW5hZ2VtZW50L3VzZXItdHlwZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/user-type-management/user-type-management.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/user-type-management/user-type-management.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\r\n\r\n  <div class=\"col-12\">\r\n\r\n    <!-- user-type-management card -->\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\">\r\n        <h4>User Type Management</h4>\r\n        <button class=\"btn btn-info float-left\" (click)=\"fetch()\"><i class=\"fas fa-sync\"></i></button>\r\n        <button data-toggle=\"modal\" data-target=\"#insert_user_type\" class=\"btn btn-primary float-right\"><i class=\"fas fa-plus\"></i></button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let userType of usersTypeData; let i = index;\" class=\"list-group-item\">\r\n            <span class=\"row\">\r\n              <div class=\"col-md-2 col-12 text-center mb-1\">{{ i+1 }}</div>\r\n              <div class=\"col-md-8 col-12\">{{ userType.ut_name_th }} ({{ userType.ut_name_en }})</div>\r\n              <div class=\"col-md-1 col-6 text-center\">\r\n                  <button (click)=\"edit(i)\" data-toggle=\"modal\" data-target=\"#insert_user_type\" class=\"btn btn-warning\"><i class=\"fas fa-pen\"></i></button>\r\n                </div>\r\n              <div class=\"col-md-1 col-6 text-center\">\r\n                <button (click)=\"delete(i, userType.ut_id)\" class=\"btn btn-danger\"><i class=\"fas fa-times\"></i></button>\r\n              </div>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"insert_user_type\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">insert_user_type</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <input type=\"hidden\" [(ngModel)]=\"ut_id\">\r\n\r\n            <div class=\"form-group\">\r\n              <label>Name TH</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ut_name_th\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Name EN</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ut_name_en\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"closeModal()\">Cancel</button>\r\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"save()\" data-dismiss=\"modal\">Save</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/user-type-management/user-type-management.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/user-type-management/user-type-management.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserTypeManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeManagementComponent", function() { return UserTypeManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-type.service */ "./src/app/services/user-type.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");




var UserTypeManagementComponent = /** @class */ (function () {
    function UserTypeManagementComponent(userTypeService, appSetting) {
        this.userTypeService = userTypeService;
        this.appSetting = appSetting;
        this.usersTypeData = [];
    }
    UserTypeManagementComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    UserTypeManagementComponent.prototype.fetch = function () {
        var _this = this;
        this.userTypeService.getAll().subscribe(function (res) {
            _this.usersTypeData = res['data'];
        });
    };
    UserTypeManagementComponent.prototype.edit = function (index) {
        var data = this.usersTypeData[index];
        this.ut_id = data.ut_id;
        this.ut_name_th = data.ut_name_th;
        this.ut_name_en = data.ut_name_en;
    };
    UserTypeManagementComponent.prototype.delete = function (index, ut_id) {
        var _this = this;
        confirm("Want to delete cluster \"" + this.usersTypeData[index].ut_name_th + "\" ?");
        this.userTypeService.ut_id = ut_id;
        this.userTypeService.delete().subscribe(function (res) {
            _this.usersTypeData.splice(index, 1);
            if (_this.appSetting.isDebuging)
                console.log(ut_id + " is deleted!");
        }, function (err) { return console.error(err); });
    };
    UserTypeManagementComponent.prototype.closeModal = function () {
        this.ut_id = null;
        this.ut_name_th = null;
        this.ut_name_en = null;
    };
    UserTypeManagementComponent.prototype.save = function () {
        var _this = this;
        if (this.ut_name_th != null) {
            if (this.ut_id != null) {
                this.userTypeService.ut_id = this.ut_id;
                this.userTypeService.ut_name_th = this.ut_name_th;
                this.userTypeService.ut_name_en = this.ut_name_en;
                this.userTypeService.update().subscribe(function (res) {
                    if (_this.appSetting.isDebuging)
                        console.log(res);
                    _this.fetch();
                }, function (err) { return console.error(err); });
                return;
            }
            this.userTypeService.ut_name_th = this.ut_name_th;
            this.userTypeService.ut_name_en = this.ut_name_en;
            this.userTypeService.insert().subscribe(function (res) {
                if (_this.appSetting.isDebuging)
                    console.log(res);
                _this.fetch();
            }, function (error) { return console.error(error); });
        }
        else {
            alert("ERROR");
        }
    };
    UserTypeManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-type-management',
            template: __webpack_require__(/*! ./user-type-management.component.html */ "./src/app/admin/user-type-management/user-type-management.component.html"),
            styles: [__webpack_require__(/*! ./user-type-management.component.css */ "./src/app/admin/user-type-management/user-type-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_type_service__WEBPACK_IMPORTED_MODULE_2__["UserTypeService"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], UserTypeManagementComponent);
    return UserTypeManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-view/user-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/user-view/user-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItdmlldy91c2VyLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/user-view/user-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-view/user-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 col-12\">\r\n\r\n      <div class=\"card mt-3\">\r\n        <div class=\"card-header\">\r\n          <h4>User Lists</h4>\r\n          <button class=\"btn btn-info float-left\" (click)=\"fetchUser()\"><i class=\"fas fa-sync\"></i></button>\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n          <ul class=\"list-group\">\r\n            <li *ngFor=\"let user of usersData; let i = index;\" class=\"list-group-item\">\r\n              <span class=\"row\">\r\n                <div class=\"col-md-2 text-center\">{{ i+1 }}</div>\r\n                <div class=\"col-md-3\">{{ user.us_username }}</div>\r\n                <div class=\"col-md-2 text-center\">{{ user.ut_name_th }}</div>\r\n                <div class=\"col-md-2 text-center\">{{ user.um_points }}</div>\r\n                <div class=\"col-md-3 text-center\">\r\n                  <button (click)=\"edit(i)\" data-toggle=\"modal\" data-target=\"#modal_edit_point\" class=\"btn btn-warning mr-1\"><i class=\"fas fa-edit\"></i></button>\r\n                  <button (click)=\"viewLogs(user.us_id, user.us_username)\" data-toggle=\"modal\" data-target=\"#modal_voted_logs\" class=\"btn btn-info mr-1\"><i class=\"fas fa-history\"></i></button>\r\n                  <button (click)=\"delete(i, user.us_id)\" class=\"btn btn-danger\"><i class=\"fas fa-times\"></i></button>\r\n                </div>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"modal_edit_point\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">edit_point ของ {{ selectedUser }}</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <input type=\"hidden\" [(ngModel)]=\"us_id\">\r\n\r\n            <div class=\"form-group\">\r\n              <label>คะแนนโหวต</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"edit_point\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"update()\" data-dismiss=\"modal\">Save</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"modal_voted_logs\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">voted_logs ของ {{ selectedUser }}</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <!-- <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <button class=\"btn btn-danger float-right mb-3\" (click)=\"restoreAllVotePoint()\"><i class=\"fas fa-trash-restore\"></i>&ensp;Restore All</button>\r\n              </div>\r\n            </div> -->\r\n\r\n            <ul class=\"list-group\">\r\n              <li *ngFor=\"let log of userLogsData; let i = index;\" class=\"list-group-item\">\r\n                  <span class=\"row\">\r\n                    <div class=\"col-md-1\">{{ i+1 }}</div>\r\n                    <div class=\"col-md-2\">{{ log.ct_name_th }}</div>\r\n                    <div class=\"col-md-2\">{{ log.voted_score }}</div>\r\n                    <div class=\"col-md-5\">{{ convertDate(log.vl_timestamp) }}</div>\r\n                    <div class=\"col-md-1 text-center\">\r\n                      <button (click)=\"restoreVotePoint(i)\" class=\"btn btn-primary\"><i class=\"fas fa-undo\"></i></button>\r\n                    </div>\r\n                  </span>\r\n              </li>\r\n            </ul>\r\n\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/user-view/user-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/user-view/user-view.component.ts ***!
  \********************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_score_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/score.service */ "./src/app/services/score.service.ts");




var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(usersService, scoreService) {
        this.usersService = usersService;
        this.scoreService = scoreService;
    }
    UserViewComponent.prototype.ngOnInit = function () {
        this.fetchUser();
    };
    UserViewComponent.prototype.fetchUser = function () {
        var _this = this;
        this.usersService.getAll().subscribe(function (res) {
            _this.usersData = res['data'];
        });
    };
    UserViewComponent.prototype.viewLogs = function (us_id, us_name) {
        var _this = this;
        if (us_name === void 0) { us_name = ""; }
        console.log(us_id);
        this.selectedUser = us_name;
        this.usersService.us_id = us_id;
        this.usersService.getLogs().subscribe(function (res) {
            console.log(res['data']);
            _this.userLogsData = res['data'];
        }, function (err) { return console.log(err); });
    };
    UserViewComponent.prototype.edit = function (index) {
        var data = this.usersData[index];
        this.selectedUser = data.us_username;
        console.log(data);
        this.us_id = data.us_id;
        this.edit_point = data.um_points;
    };
    UserViewComponent.prototype.update = function () {
        var _this = this;
        this.scoreService.us_id = this.us_id;
        this.scoreService.sc_score = this.edit_point;
        this.scoreService.updateUserPoint().subscribe(function (res) {
            _this.fetchUser();
        }, function (err) { return console.log(err); });
    };
    UserViewComponent.prototype.delete = function (index, us_id) {
        var _this = this;
        var dialog = confirm("It will delete user \"" + this.usersData[index].us_username + "\" from database.\nAre you sure?");
        if (dialog == true) {
            this.usersService.us_id = us_id;
            this.usersService.delete().subscribe(function (res) {
                _this.usersData.splice(index, 1);
            }, function (error) { return console.log(error); });
        }
        else {
            return;
        }
    };
    UserViewComponent.prototype.convertDate = function (dateTime) {
        var date = new Date(dateTime);
        return date.toUTCString();
    };
    UserViewComponent.prototype.restoreVotePoint = function (index) {
        var _this = this;
        var data = this.userLogsData[index];
        console.log(data);
        this.scoreService.us_id = data.vl_us_id;
        this.scoreService.sc_id = data.sc_id;
        this.scoreService.vl_id = data.vl_id;
        this.scoreService.sc_score = data.voted_score;
        this.scoreService.restore_step1().subscribe(function (res) {
            if (res['status'] == true) {
                _this.scoreService.restore_step2().subscribe(function (res) {
                    if (res['status'] == true) {
                        _this.scoreService.restore_step3().subscribe(function (res) {
                            if (res['status'] == true) {
                                _this.viewLogs(data.vl_us_id);
                                _this.fetchUser();
                            }
                        }, function (err) { return console.log(err); });
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) { return console.log(err); });
    };
    UserViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-view',
            template: __webpack_require__(/*! ./user-view.component.html */ "./src/app/admin/user-view/user-view.component.html"),
            styles: [__webpack_require__(/*! ./user-view.component.css */ "./src/app/admin/user-view/user-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            src_app_services_score_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"]])
    ], UserViewComponent);
    return UserViewComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin-home/admin-home.component */ "./src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_chart_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/chart/chart.component */ "./src/app/admin/chart/chart.component.ts");
/* harmony import */ var _scrum_money_chart_money_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrum/money-chart/money-chart.component */ "./src/app/scrum/money-chart/money-chart.component.ts");
/* harmony import */ var _scrum_event_management_event_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scrum/event-management/event-management.component */ "./src/app/scrum/event-management/event-management.component.ts");
/* harmony import */ var _scrum_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scrum/dashboard/dashboard.component */ "./src/app/scrum/dashboard/dashboard.component.ts");
/* harmony import */ var _scrum_scrum_bar_scrum_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scrum/scrum-bar/scrum-bar.component */ "./src/app/scrum/scrum-bar/scrum-bar.component.ts");
/* harmony import */ var _scrum_scrum_achievements_scrum_achievements_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scrum/scrum-achievements/scrum-achievements.component */ "./src/app/scrum/scrum-achievements/scrum-achievements.component.ts");












var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'admin',
        component: _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_5__["AdminHomeComponent"]
    },
    {
        path: 'chart',
        component: _admin_chart_chart_component__WEBPACK_IMPORTED_MODULE_6__["ChartComponent"]
    },
    {
        path: 'money_line_chart',
        component: _scrum_money_chart_money_chart_component__WEBPACK_IMPORTED_MODULE_7__["MoneyChartComponent"]
    },
    {
        path: 'money_bar_chart',
        component: _scrum_scrum_bar_scrum_bar_component__WEBPACK_IMPORTED_MODULE_10__["ScrumBarComponent"]
    },
    {
        path: 'money_dashboard',
        component: _scrum_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
    },
    {
        path: 'achievement',
        component: _scrum_scrum_achievements_scrum_achievements_component__WEBPACK_IMPORTED_MODULE_11__["ScrumAchievementsComponent"]
    },
    {
        path: 'scrum',
        component: _scrum_event_management_event_management_component__WEBPACK_IMPORTED_MODULE_8__["EventManagementComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Voting';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _vote_vote_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vote/vote.component */ "./src/app/vote/vote.component.ts");
/* harmony import */ var _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/user-management/user-management.component */ "./src/app/admin/user-management/user-management.component.ts");
/* harmony import */ var _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-home/admin-home.component */ "./src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_cluster_management_cluster_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/cluster-management/cluster-management.component */ "./src/app/admin/cluster-management/cluster-management.component.ts");
/* harmony import */ var _admin_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/user-view/user-view.component */ "./src/app/admin/user-view/user-view.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _admin_system_management_system_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/system-management/system-management.component */ "./src/app/admin/system-management/system-management.component.ts");
/* harmony import */ var _admin_chart_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/chart/chart.component */ "./src/app/admin/chart/chart.component.ts");
/* harmony import */ var _admin_score_view_score_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/score-view/score-view.component */ "./src/app/admin/score-view/score-view.component.ts");
/* harmony import */ var _admin_user_type_management_user_type_management_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/user-type-management/user-type-management.component */ "./src/app/admin/user-type-management/user-type-management.component.ts");
/* harmony import */ var _scrum_event_management_event_management_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./scrum/event-management/event-management.component */ "./src/app/scrum/event-management/event-management.component.ts");
/* harmony import */ var _scrum_money_chart_money_chart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./scrum/money-chart/money-chart.component */ "./src/app/scrum/money-chart/money-chart.component.ts");
/* harmony import */ var _scrum_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./scrum/dashboard/dashboard.component */ "./src/app/scrum/dashboard/dashboard.component.ts");
/* harmony import */ var _scrum_scrum_bar_scrum_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./scrum/scrum-bar/scrum-bar.component */ "./src/app/scrum/scrum-bar/scrum-bar.component.ts");
/* harmony import */ var _scrum_scrum_achievements_scrum_achievements_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scrum/scrum-achievements/scrum-achievements.component */ "./src/app/scrum/scrum-achievements/scrum-achievements.component.ts");





// import { AngularFontAwesomeModule } from 'angular-font-awesome';
























/**
 * Custom angular notifier options
 */
var customNotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 8
        },
        vertical: {
            position: 'top',
            distance: 8,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 3000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: false,
        stacking: 2
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _vote_vote_component__WEBPACK_IMPORTED_MODULE_13__["VoteComponent"],
                _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_14__["UserManagementComponent"],
                _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_15__["AdminHomeComponent"],
                _admin_cluster_management_cluster_management_component__WEBPACK_IMPORTED_MODULE_16__["ClusterManagementComponent"],
                _admin_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_17__["UserViewComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_18__["LogoutComponent"],
                _admin_system_management_system_management_component__WEBPACK_IMPORTED_MODULE_19__["SystemManagementComponent"],
                _admin_chart_chart_component__WEBPACK_IMPORTED_MODULE_20__["ChartComponent"],
                _admin_score_view_score_view_component__WEBPACK_IMPORTED_MODULE_21__["ScoreViewComponent"],
                _admin_user_type_management_user_type_management_component__WEBPACK_IMPORTED_MODULE_22__["UserTypeManagementComponent"],
                _scrum_event_management_event_management_component__WEBPACK_IMPORTED_MODULE_23__["EventManagementComponent"],
                _scrum_money_chart_money_chart_component__WEBPACK_IMPORTED_MODULE_24__["MoneyChartComponent"],
                _scrum_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _scrum_scrum_bar_scrum_bar_component__WEBPACK_IMPORTED_MODULE_26__["ScrumBarComponent"],
                _scrum_scrum_achievements_scrum_achievements_component__WEBPACK_IMPORTED_MODULE_27__["ScrumAchievementsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierModule"].withConfig(customNotifierOptions)
                // AngularFontAwesomeModule
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader,\r\n.loader:before,\r\n.loader:after {\r\n  background: #369;\r\n  -webkit-animation: load1 1s infinite ease-in-out;\r\n  animation: load1 1s infinite ease-in-out;\r\n  width: 1em;\r\n  height: 4em;\r\n}\r\n.loader {\r\n  color: #369;\r\n  text-indent: -9999em;\r\n  margin: 88px auto;\r\n  position: relative;\r\n  font-size: 11px;\r\n  transform: translateZ(0);\r\n  -webkit-animation-delay: -0.16s;\r\n  animation-delay: -0.16s;\r\n}\r\n.loader:before,\r\n.loader:after {\r\n  position: absolute;\r\n  top: 0;\r\n  content: '';\r\n}\r\n.loader:before {\r\n  left: -1.5em;\r\n  -webkit-animation-delay: -0.32s;\r\n  animation-delay: -0.32s;\r\n}\r\n.loader:after {\r\n  left: 1.5em;\r\n}\r\n@-webkit-keyframes load1 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 0;\r\n    height: 4em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 -2em;\r\n    height: 5em;\r\n  }\r\n}\r\n@keyframes load1 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 0;\r\n    height: 4em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 -2em;\r\n    height: 5em;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGdCQUFnQjtFQUNoQixnREFBZ0Q7RUFDaEQsd0NBQXdDO0VBQ3hDLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBR2Ysd0JBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQix1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0U7OztJQUdFLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7OztJQUdFLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlcixcclxuLmxvYWRlcjpiZWZvcmUsXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzNjk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDRlbTtcclxufVxyXG4ubG9hZGVyIHtcclxuICBjb2xvcjogIzM2OTtcclxuICB0ZXh0LWluZGVudDogLTk5OTllbTtcclxuICBtYXJnaW46IDg4cHggYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbn1cclxuLmxvYWRlcjpiZWZvcmUsXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgY29udGVudDogJyc7XHJcbn1cclxuLmxvYWRlcjpiZWZvcmUge1xyXG4gIGxlZnQ6IC0xLjVlbTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG59XHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIGxlZnQ6IDEuNWVtO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XHJcbiAgMCUsXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkMSB7XHJcbiAgMCUsXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-dark bg-primary\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <!-- <span></span> -->\r\n        <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n\r\n    <div class=\"navbar-brand pl-4\">\r\n        <!-- <img src=\"https://via.placeholder.com/100x32\" class=\"d-inline-block align-top\"> -->\r\n        {{ systemNameText }}\r\n    </div>\r\n\r\n    <div class=\"navbar-text mr-1 py-1 px-2 border rounded\">\r\n        <span>{{ hasScore }}&ensp;\r\n            <span *ngIf=\"hasScore > 1\">{{ multiPointText }}</span>\r\n            <span *ngIf=\"hasScore <= 1\">{{ pointText }}</span>\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <ul class=\"navbar-nav mr-auto pl-3\">\r\n                    <li class=\"nav-item active\">\r\n                        <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-home\"></i>&ensp;{{ homeText }}</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\"><i class=\"fas fa-sign-out-alt\"></i>&ensp;{{ logoutText }}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n                <div class=\"navbar-text py-1 px-2\">\r\n                    <span>{{username}}&ensp;<i class=\"fas fa-user\"></i></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</nav>\r\n\r\n<div *ngIf=\"canVote == 1\">\r\n    <app-vote (hasScoreOutput)=\"setHasScoreParent($event)\"></app-vote>\r\n</div>\r\n<div *ngIf=\"canVote == 0\">\r\n\r\n    <div *ngIf=\"isEndVote == false\" class=\"row my-5 py-5 mx-1 d-flex justify-content-center\">\r\n        <div class=\"col-md-8 col-lg-6 col-sm-10 col-12\">\r\n    \r\n            <div class=\"card border-primary\">\r\n                <div class=\"card-body text-center text-primary\">\r\n                    <h1 class=\"mb-3\"><i class=\"fas fa-hourglass-start\"></i></h1>\r\n                    <h2 class=\"mb-3\">การโหวตจะเริ่มใน</h2>\r\n                    <h4>{{ countDownTimer }}</h4>\r\n                </div>\r\n            </div>\r\n            <small class=\"text-primary\">* หากถึงเวลาโหวตแล้ว แต่ระบบไม่ตอบสนอง กรุณาโหลดหน้าเว็บใหม่</small>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isEndVote == true\" class=\"row my-5 py-5 mx-1 d-flex justify-content-center\">\r\n        <div class=\"col-md-8 col-lg-6 col-sm-10 col-12\">\r\n    \r\n            <div class=\"card border-danger\">\r\n                <div  class=\"card-body text-center text-danger\">\r\n                    <h1 class=\"mb-3\"><i class=\"fas fa-hourglass-end\"></i></h1>\r\n                    <h2>การโหวตได้สิ้นสุดลงแล้ว</h2>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n<div *ngIf=\"canVote == -1\" style=\"position: fixed; top: calc(50% - 6rem); left: calc(50% - 0.5rem)\">\r\n\r\n    <div class=\"loader\">Loading...</div>\r\n\r\n</div>\r\n\r\n<modal-logout></modal-logout>\r\n\r\n<notifier-container></notifier-container>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_vote_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vote-time.service */ "./src/app/services/vote-time.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, usersService, voteTimeService, appSetting, datepipe) {
        this.router = router;
        this.usersService = usersService;
        this.voteTimeService = voteTimeService;
        this.appSetting = appSetting;
        this.datepipe = datepipe;
        this.canVote = 0;
        this.isEndVote = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("us_id") == null) {
            this.router.navigate(['login']);
        }
        else {
            var lastLogin = parseInt(sessionStorage.getItem("last_login"));
            var toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
            var now = new Date(toDayString).getTime();
            if (now - lastLogin >= this.appSetting.canStillLoginTime) {
                this.router.navigate(['login']);
            }
            this.us_id = sessionStorage.getItem("us_id");
            this.usersService.us_id = this.us_id;
            this.usersService.loginCompleted().subscribe(function (res) {
                var toDayString = _this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
                var nowLastLogin = new Date(toDayString).getTime().toString();
                sessionStorage.setItem("last_login", nowLastLogin);
            }, function (err) { return console.error(err); });
        }
        switch (this.appSetting.lang) {
            case "EN":
                this.appSetting.getEN().subscribe(function (res) {
                    _this.setText(res.main_section);
                }, function (error) { return console.log(error); });
                break;
            case "TH":
                this.appSetting.getTH().subscribe(function (res) {
                    _this.setText(res.main_section);
                }, function (error) { return console.log(error); });
                break;
        }
        this.fetchVoteTime();
        this.usersService.us_id = this.us_id;
        this.usersService.getByKey().subscribe(function (res) {
            var data = res['data'][0];
            var lastLoging = _this.datepipe.transform(new Date(data.us_lastlogin), 'yyyy-MM-dd HH:mm:ss', '+0700');
            if (_this.appSetting.isDebuging)
                console.log(data.us_id, data.us_username, lastLoging);
            _this.username = data.us_username;
            _this.hasScore = data.um_points;
        }, function (error) { return console.error(error); });
    };
    HomeComponent.prototype.fetchVoteTime = function () {
        var _this = this;
        this.canVote = -1;
        this.voteTimeService.getAll().subscribe(function (res) {
            var data = res['data'][0];
            var startVote = new Date(data['vt_start_vote']);
            var endVote = new Date(data['vt_end_vote']);
            if (_this.appSetting.isDebuging)
                console.log(startVote, endVote);
            _this.appSetting.getTimeSync().subscribe(function (res) {
                var serverDate = res[0].now;
                var now = new Date(serverDate);
                if (_this.appSetting.isDebuging)
                    console.log("server time : " + now);
                if (now.getTime() >= startVote.getTime()) {
                    _this.canVote = 1;
                    if (now.getTime() >= endVote.getTime()) {
                        _this.canVote = 0;
                        _this.isEndVote = true;
                    }
                }
                else {
                    _this.canVote = 0;
                    _this.isEndVote = false;
                    //this.startCountDown(now, startVote, endVote);
                    _this.getCountDownWithAsync(now, startVote, endVote);
                }
            }, function (error) {
                _this.canVote = -1;
                console.error(error);
            });
        }, function (error) {
            _this.canVote = -1;
            console.error(error);
        });
    };
    HomeComponent.prototype.getCountDownWithAsync = function (now, startDateTime, endDateTime) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startCountDown(now, startDateTime, endDateTime)];
                    case 1:
                        value = _a.sent();
                        console.log("async result: " + value);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.startCountDown = function (now, startDateTime, endDateTime) {
        var _this = this;
        return new Promise(function (interval) {
            setInterval(function () {
                var toDayString = _this.datepipe.transform(now, 'yyyy-MM-dd HH:mm:ss', '+0700');
                var nowDate = _this.convertDateForIos(toDayString);
                if (_this.appSetting.isDebuging)
                    console.log(nowDate);
                var leftTime = startDateTime.getTime() - nowDate.getTime();
                _this.countDownTimer = _this.millisecToStringOutput(leftTime);
                // console.log(nowDate);
                if (nowDate.getTime() >= startDateTime.getTime()) {
                    if (nowDate.getTime() >= endDateTime.getTime()) {
                        // console.log("END VOTE !!!!!!!!!!!!!");
                        _this.canVote = 0;
                        // this.countDownTimer = "VOTE IS END !!";
                        _this.isEndVote = true;
                        clearInterval(_this.interval);
                    }
                    else {
                        _this.canVote = 1;
                        // console.log("START VOTE !!!!!!!!!!!!!");
                    }
                }
                now.setMilliseconds(now.getMilliseconds() + 1000);
            }, 1000);
        });
    };
    HomeComponent.prototype.convertDateForIos = function (date) {
        var arr = date.split(/[- :]/);
        date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
        return date;
    };
    HomeComponent.prototype.setText = function (langData) {
        this.systemNameText = langData.system_name;
        this.homeText = langData.home;
        this.logoutText = langData.logout;
        this.pointText = langData.point;
        this.multiPointText = langData.multi_point;
    };
    HomeComponent.prototype.setHasScoreParent = function ($event) {
        this.hasScore = $event;
    };
    HomeComponent.prototype.millisecToStringOutput = function (millisec) {
        var second = Math.ceil(millisec / 1000);
        var s = second % 60;
        var m = Math.floor(second / 60) % 60;
        var h = Math.floor(second / 3600) % 24;
        var d = Math.floor(second / 86400);
        if (d <= 0) {
            return this.getZeroPrefix(h) + " : " + this.getZeroPrefix(m) + " : " + this.getZeroPrefix(s) + " ชม.";
        }
        else {
            return d + " วัน " + this.getZeroPrefix(h) + " : " + this.getZeroPrefix(m) + " : " + this.getZeroPrefix(s) + " ชม.";
        }
    };
    HomeComponent.prototype.getZeroPrefix = function (time) {
        return (time < 10 ? "0" : "") + time;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            src_app_services_vote_time_service__WEBPACK_IMPORTED_MODULE_5__["VoteTimeService"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_6__["AppSettingsServiceService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-0 mx-1 d-flex justify-content-center text-center\">\r\n    <div class=\"col-md-12\">\r\n        <img src=\"assets/images/sys_logo.png\" class=\"mw-80\" width=\"256px\" height=\"256px\">\r\n    </div>\r\n</div>\r\n<div class=\"row mt-0 mx-1 d-flex justify-content-center\">\r\n    <div class=\"col-md-6 col-lg-4 col-sm-8 col-12\">\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-header bg-light\">\r\n                {{ loginText }}\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                    <div class=\"input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text bg-primary text-white\"><i class=\"fas fa-user\"></i></span>\r\n                        </div>\r\n                        <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            formControlName=\"username\"\r\n                            placeholder=\"{{ usernameText }}\"\r\n                            (keyup)=\"onkeyup()\"\r\n                            [ngClass]=\"{ 'is-invalid': isSubmitted && formControls.username.errors || isLogin == -1 && isSubmitted }\"\r\n                            required\r\n                        >\r\n                    </div>\r\n\r\n                    <div class=\"input-group mb-3\" >\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text bg-primary text-white\"><i class=\"fas fa-lock\"></i></span>\r\n                        </div>\r\n                        <input\r\n                            type=\"password\"\r\n                            class=\"form-control\"\r\n                            formControlName=\"password\"\r\n                            placeholder=\"{{ passowrdText }}\"\r\n                            (keyup)=\"onkeyup()\"\r\n                            [ngClass]=\"{ 'is-invalid': isSubmitted && formControls.password.errors || isLogin == -1 && isSubmitted }\"\r\n                            required\r\n                        >\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isSubmitted && formControls.username.errors && formControls.password.errors\">\r\n                        <div *ngIf=\"formControls.username.errors && formControls.password.errors.required\" class=\"mb-3\">\r\n                            <ngb-alert type=\"danger\" [dismissible]=\"false\">\r\n                                {{ errorUsernamePasswordRequireText }}\r\n                            </ngb-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isSubmitted && formControls.username.errors && !formControls.password.errors\">\r\n                        <div *ngIf=\"formControls.username.errors.required\" class=\"mb-3\">\r\n                            <ngb-alert type=\"danger\" [dismissible]=\"false\">\r\n                                {{ errorUsernameRequire }}\r\n                            </ngb-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isSubmitted && formControls.password.errors && !formControls.username.errors\">\r\n                        <div *ngIf=\"formControls.password.errors.required\" class=\"mb-3\">\r\n                            <ngb-alert type=\"danger\" [dismissible]=\"false\">\r\n                                {{ errorPasswordRequire }}\r\n                            </ngb-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isLogin == -1 && isSubmitted && !formControls.password.errors && !formControls.username.errors\" class=\"mb-3\">\r\n                        <ngb-alert type=\"danger\" [dismissible]=\"false\">\r\n                            {{ errorIncorrectLogin }}\r\n                        </ngb-alert>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isConnectionError == true\" class=\"mb-3\">\r\n                        <ngb-alert type=\"danger\" [dismissible]=\"false\">\r\n                            {{ errorConnection }}\r\n                        </ngb-alert>\r\n                    </div>\r\n\r\n                    <button class=\"btn btn-primary btn-block\" type=\"submit\">\r\n                        <span *ngIf=\"isLoading == true\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n                        {{ loginText }}\r\n                    </button>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, formBuilder, usersService, appSetting, datepipe) {
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.usersService = usersService;
        this.appSetting = appSetting;
        this.datepipe = datepipe;
        this.isSubmitted = false;
        this.isLogin = 0;
        this.isConnectionError = false;
        this.isLoading = false;
        this.oldInputUsername = "";
        this.oldInputPassoword = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("us_id") != null) {
            var lastLogin = parseInt(sessionStorage.getItem("last_login"));
            var toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
            var now = new Date(toDayString).getTime();
            if (now - lastLogin < this.appSetting.canStillLoginTime) {
                var userType = sessionStorage.getItem("user_type");
                if (userType == "Admin") {
                    this.router.navigate(['admin']);
                }
                else if (userType == "Scum Master") {
                    this.router.navigate(['scrum']);
                }
                else {
                    this.router.navigate(['home']);
                }
            }
        }
        else {
            //this.router.navigate(['login'])
            this.loginForm = this.formBuilder.group({
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
        }
        switch (this.appSetting.lang) {
            case "EN":
                this.appSetting.getEN().subscribe(function (res) {
                    _this.setText(res.login_section);
                }, function (error) { return console.error(error); });
                break;
            case "TH":
                this.appSetting.getTH().subscribe(function (res) {
                    _this.setText(res.login_section);
                }, function (error) { return console.error(error); });
                break;
        }
    };
    LoginComponent.prototype.setText = function (langData) {
        this.loginText = langData.login;
        this.usernameText = langData.username;
        this.passowrdText = langData.password;
        this.errorUsernamePasswordRequireText = langData.error_username_password_require;
        this.errorUsernameRequire = langData.error_username_require;
        this.errorPasswordRequire = langData.error_password_require;
        this.errorIncorrectLogin = langData.error_incorrect_login;
        this.errorConnection = langData.error_connection;
    };
    Object.defineProperty(LoginComponent.prototype, "formControls", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onkeyup = function () {
        var username = this.loginForm.get("username").value;
        var password = this.loginForm.get("password").value;
        if (this.oldInputUsername == username && this.oldInputPassoword == password) {
            this.isSubmitted = true;
            return;
        }
        this.isSubmitted = false;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        this.isLogin = 0;
        if (this.loginForm.invalid) {
            this.isLogin = 0;
            return;
        }
        this.isLoading = true;
        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
        var username = this.loginForm.get("username").value;
        var password = this.loginForm.get("password").value;
        var hashPassword = md5.appendStr(password).end().toString();
        this.oldInputUsername = username;
        this.oldInputPassoword = password;
        this.usersService.us_username = username;
        this.usersService.us_password = hashPassword;
        this.usersService.login().subscribe(function (res) {
            console.log(res);
            return;
            _this.isConnectionError = false;
            _this.isLoading = false;
            var canLogin = false;
            var loginData = res['data'][0];
            if (_this.appSetting.isDebuging)
                console.log("login data", loginData);
            if (loginData['canLogin'] == "true") {
                _this.usersService.us_id = loginData['us_id'];
                _this.usersService.loginCompleted().subscribe(function (res) {
                    var userType = loginData['ut_name_en'];
                    var userID = loginData['us_id'];
                    sessionStorage.setItem("us_id", userID);
                    sessionStorage.setItem("user_type", userType);
                    var toDayString = _this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
                    var nowLastLogin = new Date(toDayString).getTime().toString();
                    sessionStorage.setItem("last_login", nowLastLogin);
                    if (userType == "Admin") {
                        _this.router.navigate(['admin']);
                    }
                    else if (userType == "Scum Master") {
                        _this.router.navigate(['scrum']);
                    }
                    else {
                        _this.router.navigate(['home']);
                    }
                    _this.isLogin = 1;
                }, function (err) {
                    // alert("Conection Error!");
                    _this.isConnectionError = true;
                    _this.isLoading = false;
                    console.error(err);
                });
            }
            else {
                _this.isLogin = -1;
            }
        }, function (err) {
            // alert("Conection Error!");
            _this.isConnectionError = true;
            _this.isLoading = false;
            console.error(err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_8__["AppSettingsServiceService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"logoutModal\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">{{ headerText }}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <p>{{ bodyText }}</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">{{ cancelText }}</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"logout()\" data-dismiss=\"modal\">{{ confirmText }}</button>\r\n      </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, appSetting) {
        this.router = router;
        this.appSetting = appSetting;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        switch (this.appSetting.lang) {
            case "EN":
                this.appSetting.getEN().subscribe(function (res) {
                    _this.setText(res.modal.logout);
                }, function (error) { return console.error(error); });
                break;
            case "TH":
                this.appSetting.getTH().subscribe(function (res) {
                    _this.setText(res.modal.logout);
                }, function (error) { return console.error(error); });
                break;
        }
    };
    LogoutComponent.prototype.logout = function () {
        sessionStorage.removeItem("us_id");
        sessionStorage.removeItem("user_type");
        if (this.appSetting.isDebuging)
            console.log("loging out...");
        this.router.navigate(['login']);
    };
    LogoutComponent.prototype.setText = function (langData) {
        this.headerText = langData.header;
        this.bodyText = langData.body;
        this.confirmText = langData.confirm;
        this.cancelText = langData.cancel;
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/scrum/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/scrum/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-card:hover{\r\n    cursor: pointer;\r\n    background-color: #eee;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NydW0vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3NjcnVtL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY2FyZDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/scrum/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/scrum/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fliud mx-3\">\r\n  <div class=\"row\">\r\n      <div class=\"col-4 text-left\">\r\n        <h3 class=\"px-3 pt-3\">{{ boardName }}</h3>\r\n      </div>\r\n      <div class=\"col-8 text-right\">\r\n          <button class=\"btn btn-light\" (click)=\"fetch_leaderboard()\"><i class=\"fas fa-crown\"></i></button>\r\n          <button class=\"btn btn-light\" (click)=\"fetch_dashboard()\"><i class=\"fas fa-layer-group\"></i></button>\r\n          <button class=\"btn btn-light\" (click)=\"sync()\"><i class=\"fas fa-sync\"></i></button>\r\n          <a href=\"scrum\" class=\"btn btn-light\"><i class=\"fas fa-chevron-left\"></i></a>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"row mt-2 mx-1\">\r\n    \r\n        <div *ngFor=\"let cluster of clusterData; let i = index;\" class=\"col-md-6 col-lg-6 mb-3\">\r\n          <div class=\"card dashboard-card\" data-target=\"#scrumHistoryModal\" data-toggle=\"modal\" (click)=\"viewHistory(i, cluster.ct_id)\" [style.border-color]=\"cluster.ct_color_code\" style=\"border: 2px solid;\">\r\n            <div class=\"card-body\">\r\n    \r\n              <div class=\"row\">\r\n                <div class=\"col-lg-2 col-md-3 col-12 text-center mb-3\">\r\n                    <img src=\"{{ imgURL+cluster?.ct_img }}\" class=\"m-auto\" width=\"64px\" height=\"64px\">\r\n                </div>\r\n                <div class=\"row col-lg-10 col-md-9 col-12\">\r\n                  <div class=\"col-lg-7 col-md-12 col-12\">\r\n                    <h3 class=\"text-md-left text-center mt-1\">{{ cluster.ct_name_th }}<span *ngIf=\"cluster.rank == 0 || cluster.rank == 1 || cluster.rank == 2 || cluster.rank == 9\" style=\"font-size: 3rem;\">&ensp;{{ rank[cluster.rank] }}</span></h3>\r\n                  </div>\r\n                  <div class=\"col-lg-5 col-md-12 col-12\">\r\n                      <h3 class=\"text-md-right text-center pt-3\">{{ numberWithCommas(cluster.total_money) }} บาท</h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      \r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"scrumHistoryModal\">\r\n  <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">ประวัติรายการของ {{ selectedCluster }}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n        <ul class=\"list-group mb-1\">\r\n          <li class=\"list-group-item\">\r\n            <span class=\"row\">\r\n              <div class=\"col-md-4 col-12 text-center\"><strong>Event</strong></div>\r\n              <div class=\"col-md-3 col-12 text-center\"><strong>Values (Bath)</strong></div>\r\n              <div class=\"col-md-5 col-12 text-center\"><strong>Date Time</strong></div>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let event of eventHistoryData; let i = index;\" class=\"list-group-item\">\r\n            <span class=\"row\">\r\n              <div class=\"col-md-4 col-12\">{{ event.se_name }}</div>\r\n              <div class=\"col-md-3 col-12 text-center\" [ngClass]=\"(event.se_values > 0)?'text-success':'text-danger'\">{{ event.se_values }}</div>\r\n              <div class=\"col-md-5 col-12 text-center\">{{ convertDate(event.sl_time_stamp) }}</div>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/scrum/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/scrum/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_scrum_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/scrum/log.service */ "./src/app/services/scrum/log.service.ts");
/* harmony import */ var src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cluster.service */ "./src/app/services/cluster.service.ts");
/* harmony import */ var src_app_services_scrum_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/scrum/event.service */ "./src/app/services/scrum/event.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, logService, clusterService, eventService, datepipe, appSetting) {
        this.router = router;
        this.logService = logService;
        this.clusterService = clusterService;
        this.eventService = eventService;
        this.datepipe = datepipe;
        this.appSetting = appSetting;
        this.eventHistoryData = [];
        this.clusterData = [];
        this.isDashboard = true;
        this.boardName = "Dashboard";
        this.rank = ['🥇', '🥈', '🥉', '', '', '', '', '', '', '😭'];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.rootPath = this.router.url;
        this.imgURL = this.appSetting.apiURL + '/images/cluster/';
        this.fetch_dashboard();
        console.log(location.origin);
    };
    DashboardComponent.prototype.sync = function () {
        if (this.isDashboard) {
            this.fetch_dashboard();
        }
        else {
            this.fetch_leaderboard();
        }
    };
    DashboardComponent.prototype.fetch_ct = function () {
        var _this = this;
        this.clusterService.getAll().subscribe(function (res) {
            var data = res['data'];
            _this.clusterService.getLeaderboard().subscribe(function (res) {
                _this.clusterData = res['data'];
                _this.clusterData.forEach(function (e, i) {
                    _this.clusterData[i].rank = i;
                });
                var new_data = [];
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < _this.clusterData.length; j++) {
                        if (data[i].ct_id == _this.clusterData[j].ct_id) {
                            new_data.push(_this.clusterData[j]);
                        }
                    }
                }
                _this.clusterData = new_data;
            }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.fetch_dashboard = function () {
        this.boardName = "Dashboard";
        this.isDashboard = true;
        this.fetch_ct();
    };
    DashboardComponent.prototype.fetch_leaderboard = function () {
        var _this = this;
        this.boardName = "Leaderboard";
        this.isDashboard = false;
        this.clusterService.getLeaderboard().subscribe(function (res) {
            _this.clusterData = res['data'];
            _this.clusterData.forEach(function (e, i) {
                _this.clusterData[i].rank = i;
            });
            console.log(_this.clusterData);
        }, function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.viewHistory = function (index, ct_id) {
        var _this = this;
        this.selectedCluster = this.clusterData[index].ct_name_th;
        this.eventService.ct_id = ct_id;
        this.eventService.getHistory().subscribe(function (res) {
            _this.eventHistoryData = res['data'];
        }, function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.convertDate = function (dateTime) {
        var month = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
        var date = new Date(dateTime);
        var toDayString = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss', '+0700');
        var arr = toDayString.split(/[- :]/);
        var thaiDate = arr[2] + " " + month[parseInt(arr[1])] + " " + (parseInt(arr[0]) + 543) + " เวลา " + arr[3] + ":" + arr[4] + ":" + arr[5] + " น.";
        return thaiDate;
    };
    DashboardComponent.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/scrum/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/scrum/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_scrum_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"],
            src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_5__["ClusterService"],
            src_app_services_scrum_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_7__["AppSettingsServiceService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/scrum/event-management/event-management.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/scrum/event-management/event-management.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcnVtL2V2ZW50LW1hbmFnZW1lbnQvZXZlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/scrum/event-management/event-management.component.html":
/*!************************************************************************!*\
  !*** ./src/app/scrum/event-management/event-management.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-dark bg-primary\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <!-- <span></span> -->\r\n        <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n\r\n    <div class=\"navbar-brand pl-4\">\r\n      Scrum x Gamification System\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <ul class=\"navbar-nav mr-auto pl-3\">\r\n                    <li class=\"nav-item active\">\r\n                        <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-home\"></i>&ensp;Home</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"achievement\"><i class=\"fas fa-crown\"></i>&ensp;Achievements</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"money_bar_chart\"><i class=\"fas fa-chart-bar\"></i>&ensp;Bar Chart</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"money_line_chart\"><i class=\"fas fa-chart-line\"></i>&ensp;Line Chart</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"money_dashboard\"><i class=\"fas fa-tachometer-alt\"></i>&ensp;Dashboard</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\"><i class=\"fas fa-sign-out-alt\"></i>&ensp;Logout</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n                <div class=\"navbar-text py-1 px-2\">\r\n                    <span>{{username}}&ensp;<i class=\"fas fa-user\"></i></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</nav>\r\n\r\n<div class=\"row mt-3 px-3\">\r\n\r\n    <div class=\"col-4\">\r\n        <button data-toggle=\"modal\" data-target=\"#insert_log\" class=\"btn btn-primary float-left\"><i class=\"fas fa-plus\"></i>&ensp;Add Event to Cluster</button>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"row mt-2 px-3\">\r\n\r\n  <div class=\"col-12\">\r\n\r\n    <!-- event-management card -->\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\">\r\n        <h4>Events Management</h4>\r\n        <button class=\"btn btn-info float-left\" (click)=\"fetch()\"><i class=\"fas fa-sync\"></i></button>\r\n        <button data-toggle=\"modal\" data-target=\"#insert_event\" (click)=\"closeModal()\" class=\"btn btn-primary float-right\"><i class=\"fas fa-plus\"></i></button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n        <ul class=\"list-group mb-1\">\r\n          <li class=\"list-group-item\">\r\n            <span class=\"row\">\r\n              <div class=\"col-md-1 col-12 text-center\"><strong>#</strong></div>\r\n              <div class=\"col-md-4 col-12 text-center\"><strong>Name</strong></div>\r\n              <div class=\"col-md-4 col-12 text-center\"><strong>Details</strong></div>\r\n              <div class=\"col-md-2 col-12 text-center\"><strong>Values</strong></div>\r\n              <div class=\"col-md-1 col-12 text-center\"><strong>Operation</strong></div>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let event of eventData; let i = index;\" class=\"list-group-item\">\r\n            <span class=\"row\">\r\n              <div class=\"col-md-1 col-12 text-center mb-1\">{{ i+1 }}</div>\r\n              <div class=\"col-md-4 col-12\">{{ event.se_name }}</div>\r\n              <div class=\"col-md-4 col-12\">{{ event.se_details }}</div>\r\n              <div class=\"col-md-2 col-12 text-center\">{{ event.se_values }}</div>\r\n              <div class=\"col-md-1 col-6 text-center\">\r\n                <button (click)=\"edit(i)\" data-toggle=\"modal\" data-target=\"#insert_event\" class=\"btn btn-warning\"><i class=\"fas fa-pen\"></i></button>\r\n              </div>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"insert_event\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">insert_event</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <input type=\"hidden\" [(ngModel)]=\"se_id\">\r\n\r\n            <div class=\"form-group\">\r\n              <label>Name</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"se_name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Details</label>\r\n              <textarea class=\"form-control\" [(ngModel)]=\"se_details\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Value</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"se_values\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"closeModal()\">Cancel</button>\r\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"save()\" data-dismiss=\"modal\">Save</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"insert_log\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">insert_event</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <div class=\"form-group\">\r\n              <label>Event</label>\r\n              <select class=\"form-control\" [(ngModel)]=\"sl_se_id\">\r\n                <option *ngFor=\"let event of eventData; let i = index;\" [value]=\"event.se_id\">{{ event.se_name }} / {{ event.se_values }}</option>\r\n              </select>\r\n            </div>\r\n            <div *ngFor=\"let cluster of clusterData; let i = index;\" class=\"form-check\">\r\n              <input class=\"form-check-input\" [(ngModel)]=\"sl_ct_id[i]\" type=\"checkbox\" value=\"{{ cluster.ct_id }}\"  id=\"checkbox_{{ cluster.ct_id }}\">\r\n              <label class=\"form-check-label\" for=\"checkbox_{{ cluster.ct_id }}\">\r\n                {{ cluster.ct_name_th }}\r\n              </label>\r\n            </div>\r\n            <button class=\"btn btn-light\" (click)=\"checkAll()\">{{ checkedAllBtn==1?'Deselect All':'Select All' }}</button>\r\n\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"closeModal_log()\">Cancel</button>\r\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"save_log()\" data-dismiss=\"modal\">Save</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<modal-logout></modal-logout>\r\n"

/***/ }),

/***/ "./src/app/scrum/event-management/event-management.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/scrum/event-management/event-management.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventManagementComponent", function() { return EventManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_scrum_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/scrum/event.service */ "./src/app/services/scrum/event.service.ts");
/* harmony import */ var src_app_services_scrum_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/scrum/log.service */ "./src/app/services/scrum/log.service.ts");
/* harmony import */ var src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cluster.service */ "./src/app/services/cluster.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");









var EventManagementComponent = /** @class */ (function () {
    function EventManagementComponent(router, usersService, clusterService, eventService, logService, appSetting, datepipe) {
        this.router = router;
        this.usersService = usersService;
        this.clusterService = clusterService;
        this.eventService = eventService;
        this.logService = logService;
        this.appSetting = appSetting;
        this.datepipe = datepipe;
        this.eventData = [];
        this.clusterData = [];
        this.sl_ct_id = [];
        this.checkedAllBtn = 0;
    }
    EventManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("us_id") == null) {
            // this.router.navigate(['login']);
        }
        else {
            var lastLogin = parseInt(sessionStorage.getItem("last_login"));
            var toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
            var now = new Date(toDayString).getTime();
            if (now - lastLogin >= this.appSetting.canStillLoginTime) {
                this.router.navigate(['login']);
            }
            this.us_id = sessionStorage.getItem("us_id");
            this.usersService.us_id = this.us_id;
            this.usersService.loginCompleted().subscribe(function (res) {
                var toDayString = _this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
                var nowLastLogin = new Date(toDayString).getTime().toString();
                sessionStorage.setItem("last_login", nowLastLogin);
            }, function (err) { return console.error(err); });
        }
        this.rootPath = this.router.url;
        this.fetch();
        this.fetch_ct();
        this.usersService.us_id = this.us_id;
        this.usersService.getByKey().subscribe(function (res) {
            var data = res['data'][0];
            var lastLoging = _this.datepipe.transform(new Date(data.us_lastlogin), 'yyyy-MM-dd HH:mm:ss', '+0700');
            if (_this.appSetting.isDebuging)
                console.log(data.us_id, data.us_username, lastLoging);
            _this.username = data.us_username;
        }, function (error) { return console.error(error); });
    };
    EventManagementComponent.prototype.fetch = function () {
        var _this = this;
        this.eventService.getAll().subscribe(function (res) {
            _this.eventData = res['data'];
        }, function (err) { return console.log(err); });
    };
    EventManagementComponent.prototype.fetch_ct = function () {
        var _this = this;
        this.clusterService.getAll().subscribe(function (res) {
            _this.clusterData = res['data'];
        }, function (err) { return console.log(err); });
    };
    EventManagementComponent.prototype.edit = function (index) {
        var data = this.eventData[index];
        this.se_id = data.se_id;
        this.se_name = data.se_name;
        this.se_details = data.se_details;
        this.se_values = data.se_values;
    };
    EventManagementComponent.prototype.delete = function (index, se_id) {
        var _this = this;
        confirm("Want to delete cluster \"" + this.eventData[index].se_name + "\" ?");
        this.eventService.se_id = se_id;
        this.eventService.delete().subscribe(function (res) {
            _this.eventData.splice(index, 1);
            console.log(se_id + " is deleted!");
        }, function (err) { return console.error(err); });
    };
    EventManagementComponent.prototype.closeModal = function () {
        this.se_id = null;
        this.se_name = null;
        this.se_details = null;
        this.se_values = null;
    };
    EventManagementComponent.prototype.closeModal_log = function () {
    };
    EventManagementComponent.prototype.checkAll = function () {
        var _this = this;
        if (this.checkedAllBtn == 0) {
            this.clusterData.forEach(function (e, i) {
                _this.sl_ct_id[i] = e.ct_id;
            });
            this.checkedAllBtn = 1;
        }
        else {
            this.sl_ct_id = [];
            this.checkedAllBtn = 0;
        }
    };
    EventManagementComponent.prototype.save_log = function () {
        var _this = this;
        if (this.sl_se_id != null) {
            console.log(this.sl_ct_id);
            this.sl_ct_id.forEach(function (e, i) {
                _this.logService.sl_se_id = _this.sl_se_id;
                if (e) {
                    _this.logService.sl_ct_id = _this.clusterData[i].ct_id;
                    _this.logService.insert().subscribe(function (res) {
                        console.log(res);
                    }, function (error) { return console.error(error); });
                }
            });
        }
        else {
            alert("ERROR");
        }
    };
    EventManagementComponent.prototype.save = function () {
        var _this = this;
        if (this.se_name != null) {
            if (this.se_id != null) {
                this.eventService.se_id = this.se_id;
                this.eventService.se_name = this.se_name;
                this.eventService.se_details = this.se_details;
                this.eventService.se_values = this.se_values;
                this.eventService.update().subscribe(function (res) {
                    console.log(res);
                    _this.fetch();
                }, function (err) { return console.error(err); });
                return;
            }
            this.eventService.se_name = this.se_name;
            this.eventService.se_details = this.se_details;
            this.eventService.se_values = this.se_values;
            this.eventService.insert().subscribe(function (res) {
                console.log(res);
                _this.fetch();
            }, function (error) { return console.error(error); });
        }
        else {
            alert("ERROR");
        }
    };
    EventManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-management',
            template: __webpack_require__(/*! ./event-management.component.html */ "./src/app/scrum/event-management/event-management.component.html"),
            styles: [__webpack_require__(/*! ./event-management.component.css */ "./src/app/scrum/event-management/event-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
            src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_6__["ClusterService"],
            src_app_services_scrum_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            src_app_services_scrum_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_8__["AppSettingsServiceService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], EventManagementComponent);
    return EventManagementComponent;
}());



/***/ }),

/***/ "./src/app/scrum/money-chart/money-chart.component.css":
/*!*************************************************************!*\
  !*** ./src/app/scrum/money-chart/money-chart.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcnVtL21vbmV5LWNoYXJ0L21vbmV5LWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/scrum/money-chart/money-chart.component.html":
/*!**************************************************************!*\
  !*** ./src/app/scrum/money-chart/money-chart.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-right\">\r\n    <select class=\"form-control col-md-1 float-right\" [(ngModel)]=\"minRate\" (change)=\"getMoney()\">\r\n        <option value=\"60\" selected>1 hr.</option>\r\n        <option value=\"120\">2 hr.</option>\r\n        <option value=\"240\">4 hr.</option>\r\n        <option value=\"480\">8 hr.</option>\r\n        <option value=\"720\">12 hr.</option>\r\n        <option value=\"1440\">1 day.</option>\r\n    </select>\r\n    <a href=\"scrum\" class=\"btn btn-light\"><i class=\"fas fa-chevron-left\"></i></a>\r\n    <button class=\"btn btn-light\" (click)=\"getMoney()\"><i class=\"fas fa-sync\"></i></button>\r\n</div>\r\n\r\n<highcharts-chart \r\n[Highcharts]=\"Highcharts\"\r\n[options]=\"chartOptions\"\r\n\r\nstyle=\"width: 100%; height: 94vh; display: block;\"\r\n></highcharts-chart>"

/***/ }),

/***/ "./src/app/scrum/money-chart/money-chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/scrum/money-chart/money-chart.component.ts ***!
  \************************************************************/
/*! exports provided: MoneyChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyChartComponent", function() { return MoneyChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_scrum_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/scrum/log.service */ "./src/app/services/scrum/log.service.ts");
/* harmony import */ var src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cluster.service */ "./src/app/services/cluster.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_6__);







var MoneyChartComponent = /** @class */ (function () {
    function MoneyChartComponent(router, logService, clusterService, datepipe) {
        this.router = router;
        this.logService = logService;
        this.clusterService = clusterService;
        this.datepipe = datepipe;
        this.minRate = 60;
        this.chartRefreshTime = 15 * 60 * 1000; // min.
        this.clusterMoneyData = [];
        this.clusterData = [{ name: "", color: "", data: [] }, { name: "", color: "", data: [] }, { name: "", color: "", data: [] },
            { name: "", color: "", data: [] }, { name: "", color: "", data: [] }, { name: "", color: "", data: [] },
            { name: "", color: "", data: [] }, { name: "", color: "", data: [] }, { name: "", color: "", data: [] },
            { name: "", color: "", data: [] }];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_6__;
        this.chartOptions = {
            chart: {
                type: 'line',
                marginRight: 130
            },
            title: {
                text: 'OSSD#7',
                style: {
                    fontFamily: "Prompt",
                    fontSize: "40px",
                    fontWeight: "600"
                }
            },
            time: {
                useUTC: false,
                timezoneOffset: 7 * 60
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'จำนวนเงิน (บาท)',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "28px",
                        fontWeight: "600"
                    }
                },
                labels: {
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "24px"
                    }
                }
            },
            xAxis: {
                title: {
                    text: 'เวลา',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "28px",
                        fontWeight: "600"
                    }
                },
                type: 'datetime',
                tickPixelInterval: 150,
                labels: {
                    format: '{value: %H:%M}',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "24px",
                        fontWeight: "400"
                    }
                },
            },
            legend: {
                enabled: true,
                itemStyle: {
                    fontFamily: "Prompt",
                    fontSize: "28px",
                    fontWeight: "600"
                },
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            tooltip: {
                enabled: true,
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
            },
            plotOptions: {
                series: {
                    lineWidth: 8,
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                    name: "",
                    data: [],
                    color: ''
                }, {
                    name: "",
                    data: [],
                    color: ''
                }, {
                    name: "",
                    data: [],
                    color: ''
                }, {
                    name: "",
                    data: [],
                    color: ''
                }, {
                    name: "",
                    data: [],
                    color: ''
                }, {
                    name: "",
                    data: [],
                    color: ''
                }, {
                    name: "",
                    data: [],
                    color: ''
                }, {
                    name: "",
                    data: [],
                    color: ''
                }, {
                    name: "",
                    data: [],
                    color: ''
                }, {
                    name: "",
                    data: [],
                    color: ''
                }]
        };
    }
    MoneyChartComponent.prototype.ngOnInit = function () {
        this.rootPath = this.router.url;
        this.getMoney();
    };
    MoneyChartComponent.prototype.getMoney = function () {
        var _this = this;
        this.chartRefreshTime = this.minRate * 60 * 1000;
        this.resetData();
        clearTimeout(this.timeouter);
        this.logService.time = this.chartRefreshTime / 1000;
        this.logService.getByRangeTime().subscribe(function (res) {
            var data = res['data'];
            // console.log(data);
            console.log("Synced!");
            data.forEach(function (e) {
                if (!_this.clusterData[e.ct_sequence].name) {
                    _this.clusterData[e.ct_sequence].name = e.ct_name_th;
                }
                if (!_this.clusterData[e.ct_sequence].color) {
                    _this.clusterData[e.ct_sequence].color = e.ct_color_code;
                }
                _this.clusterData[e.ct_sequence].data.push({ x: (new Date()).getTime() - e.Hour * _this.chartRefreshTime, y: e.total_money });
            });
            _this.setChart();
            _this.updateMoney();
        }, function (err) { return console.error(err); });
    };
    MoneyChartComponent.prototype.updateMoney = function () {
        var _this = this;
        this.logService.getByRangeTimeNow().subscribe(function (res) {
            var data = res['data'];
            data.forEach(function (e) {
                if (!_this.clusterData[e.ct_sequence].name) {
                    _this.clusterData[e.ct_sequence].name = e.ct_name_th;
                }
                if (!_this.clusterData[e.ct_sequence].color) {
                    _this.clusterData[e.ct_sequence].color = e.ct_color_code;
                }
                _this.clusterData[e.ct_sequence].data.push({ x: (new Date()).getTime() - e.Hour * _this.chartRefreshTime, y: e.total_money });
                console.log(e.ct_sequence, _this.clusterData[e.ct_sequence].data.length);
                if (_this.clusterData[e.ct_sequence].data.length > 50) {
                    _this.clusterData[e.ct_sequence].data.splice(0, _this.clusterData[e.ct_sequence].data.length - 50);
                }
            });
            _this.setChart();
            _this.timeouter = setTimeout(function () {
                _this.updateMoney();
            }, _this.chartRefreshTime);
        }, function (error) { return console.log(error); });
    };
    MoneyChartComponent.prototype.resetData = function () {
        this.clusterData = [{ name: "", color: "", data: [] }, { name: "", color: "", data: [] }, { name: "", color: "", data: [] },
            { name: "", color: "", data: [] }, { name: "", color: "", data: [] }, { name: "", color: "", data: [] },
            { name: "", color: "", data: [] }, { name: "", color: "", data: [] }, { name: "", color: "", data: [] },
            { name: "", color: "", data: [] }];
    };
    MoneyChartComponent.prototype.setChart = function () {
        this.chartOptions = {
            chart: {
                type: 'line',
                marginRight: 130
            },
            title: {
                text: 'OSSD#7',
                style: {
                    fontFamily: "Prompt",
                    fontSize: "40px",
                    fontWeight: "600"
                }
            },
            time: {
                useUTC: false,
                timezoneOffset: 7 * 60
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'จำนวนเงิน (บาท)',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "28px",
                        fontWeight: "600"
                    }
                },
                labels: {
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "24px"
                    }
                }
            },
            xAxis: {
                title: {
                    text: 'เวลา',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "28px",
                        fontWeight: "600"
                    }
                },
                type: 'datetime',
                tickPixelInterval: 150,
                labels: {
                    format: '{value: %H:%M}',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "24px",
                        fontWeight: "400"
                    }
                },
            },
            legend: {
                enabled: true,
                itemStyle: {
                    fontFamily: "Prompt",
                    fontSize: "28px",
                    fontWeight: "600"
                },
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            tooltip: {
                enabled: true,
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
            },
            plotOptions: {
                series: {
                    lineWidth: 8,
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                    name: this.clusterData[0].name,
                    data: this.clusterData[0].data,
                    color: this.clusterData[0].color
                },
                {
                    name: this.clusterData[1].name,
                    data: this.clusterData[1].data,
                    color: this.clusterData[1].color
                },
                {
                    name: this.clusterData[2].name,
                    data: this.clusterData[2].data,
                    color: this.clusterData[2].color
                },
                {
                    name: this.clusterData[3].name,
                    data: this.clusterData[3].data,
                    color: this.clusterData[3].color
                },
                {
                    name: this.clusterData[4].name,
                    data: this.clusterData[4].data,
                    color: this.clusterData[4].color
                },
                {
                    name: this.clusterData[5].name,
                    data: this.clusterData[5].data,
                    color: this.clusterData[5].color
                },
                {
                    name: this.clusterData[6].name,
                    data: this.clusterData[6].data,
                    color: this.clusterData[6].color
                },
                {
                    name: this.clusterData[7].name,
                    data: this.clusterData[7].data,
                    color: this.clusterData[7].color
                },
                {
                    name: this.clusterData[8].name,
                    data: this.clusterData[8].data,
                    color: this.clusterData[8].color
                },
                {
                    name: this.clusterData[9].name,
                    data: this.clusterData[9].data,
                    color: this.clusterData[9].color
                }]
        };
    };
    MoneyChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-money-chart',
            template: __webpack_require__(/*! ./money-chart.component.html */ "./src/app/scrum/money-chart/money-chart.component.html"),
            styles: [__webpack_require__(/*! ./money-chart.component.css */ "./src/app/scrum/money-chart/money-chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_scrum_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"],
            src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_5__["ClusterService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], MoneyChartComponent);
    return MoneyChartComponent;
}());



/***/ }),

/***/ "./src/app/scrum/scrum-achievements/scrum-achievements.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/scrum/scrum-achievements/scrum-achievements.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcnVtL3NjcnVtLWFjaGlldmVtZW50cy9zY3J1bS1hY2hpZXZlbWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/scrum/scrum-achievements/scrum-achievements.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/scrum/scrum-achievements/scrum-achievements.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fliud mx-3\">\r\n  <div class=\"row\">\r\n      <div class=\"col-4 text-left\">\r\n        <h3 class=\"px-3 pt-3\">Achievments</h3>\r\n      </div>\r\n      <div class=\"col-8 text-right\">\r\n          <button class=\"btn btn-light\" (click)=\"sync()\"><i class=\"fas fa-sync\"></i></button>\r\n          <a href=\"scrum\" class=\"btn btn-light\"><i class=\"fas fa-chevron-left\"></i></a>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"row mt-2 mx-1\">\r\n    \r\n        <div *ngFor=\"let cluster of clusterData; let i = index;\" class=\"col-md-6 col-lg-6 mb-3\">\r\n          <div class=\"card dashboard-card\" [style.border-color]=\"cluster.ct_color_code\" style=\"border: 2px solid;\">\r\n            <div class=\"card-body\">\r\n    \r\n              <div class=\"row\">\r\n                <div class=\"col-12 text-center mb-3\">\r\n                  {{ cluster.ct_name_th }}\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/scrum/scrum-achievements/scrum-achievements.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/scrum/scrum-achievements/scrum-achievements.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScrumAchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumAchievementsComponent", function() { return ScrumAchievementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cluster.service */ "./src/app/services/cluster.service.ts");



var ScrumAchievementsComponent = /** @class */ (function () {
    function ScrumAchievementsComponent(clusterService) {
        this.clusterService = clusterService;
        this.clusterData = [];
    }
    ScrumAchievementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clusterService.getAll().subscribe(function (res) {
            _this.clusterData = res['data'];
        }, function (err) { return console.log(err); });
    };
    ScrumAchievementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scrum-achievements',
            template: __webpack_require__(/*! ./scrum-achievements.component.html */ "./src/app/scrum/scrum-achievements/scrum-achievements.component.html"),
            styles: [__webpack_require__(/*! ./scrum-achievements.component.css */ "./src/app/scrum/scrum-achievements/scrum-achievements.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_2__["ClusterService"]])
    ], ScrumAchievementsComponent);
    return ScrumAchievementsComponent;
}());



/***/ }),

/***/ "./src/app/scrum/scrum-bar/scrum-bar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/scrum/scrum-bar/scrum-bar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcnVtL3NjcnVtLWJhci9zY3J1bS1iYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/scrum/scrum-bar/scrum-bar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/scrum/scrum-bar/scrum-bar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-right\">\r\n    <a href=\"scrum\" class=\"btn btn-light\"><i class=\"fas fa-chevron-left\"></i></a>\r\n    <button class=\"btn btn-light\" (click)=\"fetch_leaderboard()\"><i class=\"fas fa-sync\"></i></button>\r\n</div>\r\n\r\n<highcharts-chart \r\n[Highcharts]=\"Highcharts\"\r\n[options]=\"chartOptions\"\r\n\r\nstyle=\"width: 100%; height: 94vh; display: block;\"\r\n></highcharts-chart>"

/***/ }),

/***/ "./src/app/scrum/scrum-bar/scrum-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/scrum/scrum-bar/scrum-bar.component.ts ***!
  \********************************************************/
/*! exports provided: ScrumBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumBarComponent", function() { return ScrumBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_scrum_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scrum/log.service */ "./src/app/services/scrum/log.service.ts");
/* harmony import */ var src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cluster.service */ "./src/app/services/cluster.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_6__);







highcharts__WEBPACK_IMPORTED_MODULE_6__["setOptions"]({
    lang: {
        decimalPoint: '.',
        thousandsSep: ','
    },
    yAxis: {
        title: {
            style: {
                fontFamily: "Prompt",
                fontSize: "24px",
                fontWeight: "600"
            }
        },
        labels: {
            style: {
                fontFamily: "Prompt",
                fontSize: "36px",
                fontWeight: "600"
            }
        }
    }
});
var ScrumBarComponent = /** @class */ (function () {
    function ScrumBarComponent(router, logService, clusterService, appSettings) {
        this.router = router;
        this.logService = logService;
        this.clusterService = clusterService;
        this.appSettings = appSettings;
        this.clusterMoneyData = [];
        this.clusterData = [];
        this.clusterCategories = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_6__;
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'OSSD#7',
                style: {
                    fontFamily: "Prompt",
                    fontSize: "40px",
                    fontWeight: "600"
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'จำนวนเงิน (บาท)'
                },
                labels: {
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "24px"
                    }
                }
            },
            xAxis: {
                labels: {
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "28px",
                        fontWeight: "500"
                    }
                },
                categories: this.clusterCategories
            },
            legend: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:,.0f}',
                        style: {
                            fontFamily: "Prompt",
                            fontSize: "24px"
                        }
                    }
                }
            },
            series: [{
                    data: this.clusterMoneyData
                }]
        };
    }
    ScrumBarComponent.prototype.ngOnInit = function () {
        this.rootPath = this.router.url;
        this.fetch_leaderboard();
    };
    ScrumBarComponent.prototype.fetch_leaderboard = function () {
        var _this = this;
        this.clusterService.getDashboard().subscribe(function (res) {
            var data = res['data'];
            _this.clusterCategories = [];
            _this.clusterMoneyData = [];
            console.log(data);
            data.forEach(function (element) {
                _this.clusterCategories.push(element.ct_name_th);
                _this.clusterMoneyData.push({ "y": element.total_money, "color": element.ct_color_code });
            });
            _this.chartOptions = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'OSSD#7',
                    style: {
                        fontFamily: "Prompt",
                        fontSize: "40px",
                        fontWeight: "600"
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: "จำนวนเงิน (บาท)"
                    },
                    labels: {
                        style: {
                            fontFamily: "Prompt",
                            fontSize: "24px"
                        }
                    }
                },
                xAxis: {
                    labels: {
                        style: {
                            fontFamily: "Prompt",
                            fontSize: "28px",
                            fontWeight: "500"
                        }
                    },
                    categories: _this.clusterCategories
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:,.0f}',
                            style: {
                                fontFamily: "Prompt",
                                fontSize: "24px"
                            }
                        }
                    }
                },
                series: [{
                        data: _this.clusterMoneyData
                    }]
            };
            console.log(_this.clusterData);
        }, function (err) { return console.log(err); });
    };
    ScrumBarComponent.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    ScrumBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scrum-bar',
            template: __webpack_require__(/*! ./scrum-bar.component.html */ "./src/app/scrum/scrum-bar/scrum-bar.component.html"),
            styles: [__webpack_require__(/*! ./scrum-bar.component.css */ "./src/app/scrum/scrum-bar/scrum-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_scrum_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
            src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_4__["ClusterService"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsServiceService"]])
    ], ScrumBarComponent);
    return ScrumBarComponent;
}());



/***/ }),

/***/ "./src/app/services/app-settings-service.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/app-settings-service.service.ts ***!
  \**********************************************************/
/*! exports provided: AppSettingsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsServiceService", function() { return AppSettingsServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppSettingsServiceService = /** @class */ (function () {
    function AppSettingsServiceService(http) {
        this.http = http;
        // apiURL: String = "http://10.80.39.252:3000"; // http://localhost:3000
        // apiURL: String = "http://localhost:3000"; // http://localhost:3000
        this.apiURL = "https://bearhunt-vote-api.herokuapp.com";
        this.secretKey = "l3ear@Hunt;"; // secret key
        this.isDebuging = false; // use to open/close console log
        this.lang = "TH"; // lang to use have "EN" is English , "TH" is Thai
        this.chartRefreshTime = 5000; // miliseconds
        this.canStillLoginTime = 10 * 60 * 1000; // minutes x seconds in minutes x miliseconds
    }
    /*
    * getTH
    * get thai string values from json file
    */
    AppSettingsServiceService.prototype.getTH = function () {
        return this.http.get("./assets/lang/th.json");
    };
    /*
    * getEN
    * get english string values from json file
    */
    AppSettingsServiceService.prototype.getEN = function () {
        return this.http.get("./assets/lang/en.json");
    };
    /*
    * getTimeSync
    * get server time
    */
    AppSettingsServiceService.prototype.getTimeSync = function () {
        return this.http.get(this.apiURL + "/timesync");
    };
    AppSettingsServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppSettingsServiceService);
    return AppSettingsServiceService;
}());



/***/ }),

/***/ "./src/app/services/cluster.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/cluster.service.ts ***!
  \*********************************************/
/*! exports provided: ClusterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterService", function() { return ClusterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");




var ClusterService = /** @class */ (function () {
    function ClusterService(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
    }
    ClusterService.prototype.getAll = function () {
        return this.http.get(this.appSetting.apiURL + '/cluster');
    };
    ClusterService.prototype.getDashboard = function () {
        return this.http.get(this.appSetting.apiURL + '/cluster/dashboard');
    };
    ClusterService.prototype.getLeaderboard = function () {
        return this.http.get(this.appSetting.apiURL + '/cluster/leaderboard');
    };
    ClusterService.prototype.uploadImg = function () {
        var formData = new FormData();
        formData.append('ct_img', this.ct_img);
        return this.http.post(this.appSetting.apiURL + '/api/Upload', formData);
    };
    ClusterService.prototype.deleteImg = function () {
        var data = { "filename": this.ct_img };
        return this.http.post(this.appSetting.apiURL + '/api/deleteImage', data);
    };
    ClusterService.prototype.insert = function () {
        var data = {
            "ct_sequence": this.ct_sequence,
            "ct_name_th": this.ct_name_th,
            "ct_name_en": this.ct_name_en,
            "ct_img": this.ct_img,
            "ct_color_code": this.ct_color_code,
            "sm_sys_id": this.sm_sys_id
        };
        return this.http.post(this.appSetting.apiURL + '/cluster', data);
    };
    ClusterService.prototype.update = function () {
        var data = {
            "ct_id": this.ct_id,
            "ct_sequence": this.ct_sequence,
            "ct_name_th": this.ct_name_th,
            "ct_name_en": this.ct_name_en,
            "ct_img": this.ct_img,
            "ct_color_code": this.ct_color_code,
            "sm_sys_id": this.sm_sys_id
        };
        return this.http.put(this.appSetting.apiURL + '/cluster', data);
    };
    ClusterService.prototype.getByKey = function () {
        return this.http.get(this.appSetting.apiURL + '/cluster/' + this.ct_id);
    };
    ClusterService.prototype.delete = function () {
        return this.http.delete(this.appSetting.apiURL + '/cluster/' + this.ct_id);
    };
    ClusterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], ClusterService);
    return ClusterService;
}());



/***/ }),

/***/ "./src/app/services/score.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/score.service.ts ***!
  \*******************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__);





var ScoreService = /** @class */ (function () {
    function ScoreService(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
    }
    ScoreService.prototype.addScore = function () {
        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
        var hashSecretKey = md5.appendStr(this.appSetting.secretKey.toString()).end().toString();
        var data = { "hash": hashSecretKey, "us_id": this.us_id, "sc_score": this.sc_score, "ct_id": this.sc_ct_id };
        return this.http.post(this.appSetting.apiURL + '/add_score', data);
    };
    ScoreService.prototype.minusUserScore = function () {
        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
        var hashSecretKey = md5.appendStr(this.appSetting.secretKey.toString()).end().toString();
        var data = { "hash": hashSecretKey, "us_id": this.us_id, "sc_score": this.sc_score, "ct_id": this.sc_ct_id };
        return this.http.post(this.appSetting.apiURL + '/minus_score', data);
    };
    ScoreService.prototype.createLog = function () {
        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
        var hashSecretKey = md5.appendStr(this.appSetting.secretKey.toString()).end().toString();
        var data = { "hash": hashSecretKey, "us_id": this.us_id, "sc_score": this.sc_score, "ct_id": this.sc_ct_id };
        return this.http.post(this.appSetting.apiURL + '/log', data);
    };
    ScoreService.prototype.restore_step1 = function () {
        var data = { "vl_id": this.vl_id, "us_id": this.us_id, "sc_score": this.sc_score, "sc_id": this.sc_id };
        return this.http.post(this.appSetting.apiURL + '/restore_sc', data);
    };
    ScoreService.prototype.restore_step2 = function () {
        var data = { "vl_id": this.vl_id, "us_id": this.us_id, "sc_score": this.sc_score, "sc_id": this.sc_id };
        return this.http.post(this.appSetting.apiURL + '/restore_um', data);
    };
    ScoreService.prototype.restore_step3 = function () {
        var data = { "vl_id": this.vl_id, "us_id": this.us_id, "sc_score": this.sc_score, "sc_id": this.sc_id };
        return this.http.post(this.appSetting.apiURL + '/restore_vl', data);
    };
    ScoreService.prototype.getScore = function () {
        return this.http.get(this.appSetting.apiURL + '/score');
    };
    ScoreService.prototype.resetScore = function () {
        return this.http.get(this.appSetting.apiURL + '/resetScore');
    };
    ScoreService.prototype.updateUserPoint = function () {
        var data = { "us_id": this.us_id, "sc_score": this.sc_score, "ct_id": this.sc_ct_id };
        return this.http.put(this.appSetting.apiURL + '/score', data);
    };
    ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], ScoreService);
    return ScoreService;
}());



/***/ }),

/***/ "./src/app/services/scrum/event.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/scrum/event.service.ts ***!
  \*************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");




var EventService = /** @class */ (function () {
    function EventService(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
    }
    EventService.prototype.getAll = function () {
        return this.http.get(this.appSetting.apiURL + '/scrum/events');
    };
    EventService.prototype.getHistory = function () {
        var data = {
            "ct_id": this.ct_id
        };
        return this.http.post(this.appSetting.apiURL + '/scrum/history', data);
    };
    EventService.prototype.insert = function () {
        var data = {
            "se_name": this.se_name,
            "se_details": this.se_details,
            "se_values": this.se_values,
        };
        return this.http.post(this.appSetting.apiURL + '/scrum/events', data);
    };
    EventService.prototype.update = function () {
        var data = {
            "se_id": this.se_id,
            "se_name": this.se_name,
            "se_details": this.se_details,
            "se_values": this.se_values,
        };
        return this.http.put(this.appSetting.apiURL + '/scrum/events', data);
    };
    EventService.prototype.delete = function () {
        return this.http.delete(this.appSetting.apiURL + '/scrum/events/' + this.se_id);
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/scrum/log.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/scrum/log.service.ts ***!
  \***********************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");




var LogService = /** @class */ (function () {
    function LogService(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
    }
    LogService.prototype.getAll = function () {
        return this.http.get(this.appSetting.apiURL + '/scrum/logs');
    };
    LogService.prototype.getByRangeTime = function () {
        var data = { time: this.time };
        return this.http.post(this.appSetting.apiURL + '/scrum/all_money', data);
    };
    LogService.prototype.getByRangeTimeNow = function () {
        return this.http.get(this.appSetting.apiURL + '/scrum/all_money_now');
    };
    LogService.prototype.insert = function () {
        var data = {
            "sl_id": this.sl_id,
            "sl_ct_id": this.sl_ct_id,
            "sl_se_id": this.sl_se_id,
        };
        return this.http.post(this.appSetting.apiURL + '/scrum/logs', data);
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/services/system.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/system.service.ts ***!
  \********************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");




var SystemService = /** @class */ (function () {
    function SystemService(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
    }
    SystemService.prototype.getAll = function () {
        return this.http.get(this.appSetting.apiURL + '/systems');
    };
    SystemService.prototype.insert = function () {
        var data = { "sys_name_th": this.sys_name_th, "sys_name_en": this.sys_name_en };
        return this.http.post(this.appSetting.apiURL + '/systems', data);
    };
    SystemService.prototype.update = function () {
        var data = { "sys_id": this.sys_id, "sys_name_th": this.sys_name_th, "sys_name_en": this.sys_name_en };
        return this.http.put(this.appSetting.apiURL + '/systems', data);
    };
    SystemService.prototype.delete = function () {
        return this.http.delete(this.appSetting.apiURL + '/systems/' + this.sys_id);
    };
    SystemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], SystemService);
    return SystemService;
}());



/***/ }),

/***/ "./src/app/services/user-type.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-type.service.ts ***!
  \***********************************************/
/*! exports provided: UserTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeService", function() { return UserTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");




var UserTypeService = /** @class */ (function () {
    function UserTypeService(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
    }
    UserTypeService.prototype.getAll = function () {
        return this.http.get(this.appSetting.apiURL + '/user_type');
    };
    UserTypeService.prototype.insert = function () {
        var data = {
            "ut_name_th": this.ut_name_th,
            "ut_name_en": this.ut_name_en
        };
        return this.http.post(this.appSetting.apiURL + '/user_type', data);
    };
    UserTypeService.prototype.update = function () {
        var data = {
            "ut_id": this.ut_id,
            "ut_name_th": this.ut_name_th,
            "ut_name_en": this.ut_name_en
        };
        return this.http.put(this.appSetting.apiURL + '/user_type', data);
    };
    UserTypeService.prototype.delete = function () {
        return this.http.delete(this.appSetting.apiURL + '/user_type/' + this.ut_id);
    };
    UserTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], UserTypeService);
    return UserTypeService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UsersService = /** @class */ (function () {
    function UsersService(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
    }
    UsersService.prototype.login = function () {
        var data = { "us_username": this.us_username, "us_password": this.us_password };
        return this.http.post(this.appSetting.apiURL + '/users/login', data);
    };
    UsersService.prototype.loginCompleted = function () {
        var data = { "us_id": this.us_id };
        return this.http.put(this.appSetting.apiURL + '/users/logged_in', data);
    };
    UsersService.prototype.insert = function () {
        var data = { "us_username": this.us_username, "us_password": this.us_password, "us_ut_id": this.us_ut_id, "um_points": this.um_points };
        return this.http.post(this.appSetting.apiURL + '/users', data);
    };
    UsersService.prototype.getAll = function () {
        return this.http.get(this.appSetting.apiURL + '/users');
    };
    UsersService.prototype.getByKey = function () {
        return this.http.get(this.appSetting.apiURL + '/users/' + this.us_id);
    };
    UsersService.prototype.getLogs = function () {
        return this.http.get(this.appSetting.apiURL + '/users/logs/' + this.us_id);
    };
    UsersService.prototype.delete = function () {
        return this.http.delete(this.appSetting.apiURL + '/users/' + this.us_id);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/services/vote-time.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/vote-time.service.ts ***!
  \***********************************************/
/*! exports provided: VoteTimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteTimeService", function() { return VoteTimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");




var VoteTimeService = /** @class */ (function () {
    function VoteTimeService(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
    }
    VoteTimeService.prototype.getAll = function () {
        return this.http.get(this.appSetting.apiURL + '/vote_time');
    };
    VoteTimeService.prototype.update = function () {
        var data = { "vt_start_vote": this.vt_start_vote, "vt_end_vote": this.vt_end_vote };
        return this.http.put(this.appSetting.apiURL + '/vote_time', data);
    };
    VoteTimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsServiceService"]])
    ], VoteTimeService);
    return VoteTimeService;
}());



/***/ }),

/***/ "./src/app/vote/vote.component.css":
/*!*****************************************!*\
  !*** ./src/app/vote/vote.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvdGUvdm90ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vote/vote.component.html":
/*!******************************************!*\
  !*** ./src/app/vote/vote.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-unstyled\">\r\n    <li class=\"media border-bottom p-2\" *ngFor=\"let cluster of clustersData; let i = index;\" (click)=\"clickToVote(i)\" data-toggle=\"modal\" data-target=\"#voteModal\">\r\n        <img src=\"{{ imgURL+cluster?.ct_img }}\" class=\"m-auto\" width=\"64px\" height=\"64px\">\r\n        <div class=\"media-body ml-2\">\r\n            <h5 class=\"mt-0\">{{ cluster.ct_name_th }}</h5>\r\n            <p>{{ cluster.sys_name_th }}</p>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n\r\n<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"voteModal\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">{{ voteHeaderText }} {{ clusterNameToVote }}</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n                <span aria-hidden=\"true\"><i class=\"fas fa-times\"></i></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n            <div class=\"row mx-md-0\">\r\n                <div class=\"col-12\" *ngIf=\"clusterToVote != null\">\r\n                    <div class=\"text-center\">\r\n                        <img src=\"{{ imgURL+clusterToVote?.ct_img }}\" class=\"m-auto\" width=\"64px\" height=\"64px\">\r\n                    </div>\r\n                    <h4 class=\"text-center\">{{ clusterToVote.ct_name_th }}</h4>\r\n                    <p class=\"text-center\">{{ clusterToVote.sys_name_th }}</p>\r\n                    <hr>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3 mx-md-0\">\r\n                <div class=\"col-12 px-2 text-right\">\r\n                    <span class=\"text-primary\">คงเหลือ {{ remainScore }} คะแนน</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3 mx-md-0\">\r\n                <div class=\"col-3\">\r\n                    <button type=\"button\" class=\"btn btn-outline-info btn-block px-md-0\" (click)=\"setScore(1)\" [disabled]=\"onePointBtn\">+ 1</button>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                    <button type=\"button\" class=\"btn btn-outline-info btn-block px-md-0\" (click)=\"setScore(2)\" [disabled]=\"twoPointBtn\">+ 2</button>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                    <button type=\"button\" class=\"btn btn-outline-info btn-block px-md-0\" (click)=\"setScore(5)\" [disabled]=\"fivePointBtn\">+ 5</button>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                    <button type=\"button\" class=\"btn btn-outline-info btn-block px-md-0\" (click)=\"setScore(10)\" [disabled]=\"tenPointBtn\">+ 10</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-12\">\r\n                    <div class=\"input-group mb-3\">\r\n                        <div class=\"input-group-prepend col-4  mx-0 px-0\">\r\n                            <button class=\"btn btn-outline-danger btn-block\" type=\"button\" (click)=\"minusScore()\" (mousedown)=\"minusScoreDown()\" (mouseup)=\"cancelInterval()\" (mouseleave)=\"cancelInterval()\" [disabled]=\"hasScore == 0\"><i class=\"fas fa-minus\" style=\"font-size: 1.5rem;\"></i></button>\r\n                        </div>\r\n                        <input type=\"number\" class=\"form-control text-center\" style=\"font-size: 2rem;\" [(ngModel)]=\"voteScore\" (keyup)=\"keyupScore($event)\" (change)=\"keyupScore($event)\" [disabled]=\"hasScore == 0\">\r\n                        <div class=\"input-group-append col-4  mx-0 px-0\">\r\n                            <button class=\"btn btn-outline-success btn-block\" type=\"button\" (click)=\"plusScore()\" (mousedown)=\"plusScoreDown()\" (mouseup)=\"cancelInterval()\" (mouseleave)=\"cancelInterval()\" [disabled]=\"hasScore == 0\"><i class=\"fas fa-plus\" style=\"font-size: 1.5rem;\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n            <button type=\"button\" class=\"btn btn-success btn-block btn-lg\" (click)=\"vote()\" data-dismiss=\"modal\" [disabled]=\"hasScore == 0 || voteScore == 0\">{{ voteText }}</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/vote/vote.component.ts":
/*!****************************************!*\
  !*** ./src/app/vote/vote.component.ts ***!
  \****************************************/
/*! exports provided: VoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteComponent", function() { return VoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cluster.service */ "./src/app/services/cluster.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_score_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/score.service */ "./src/app/services/score.service.ts");
/* harmony import */ var src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app-settings-service.service */ "./src/app/services/app-settings-service.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");








var VoteComponent = /** @class */ (function () {
    function VoteComponent(router, clusterService, usersService, scoreService, appSetting, notifier) {
        this.router = router;
        this.clusterService = clusterService;
        this.usersService = usersService;
        this.scoreService = scoreService;
        this.appSetting = appSetting;
        this.notifier = notifier;
        this.voteScore = 0;
        this.clustersData = [];
        this.onePointBtn = false;
        this.twoPointBtn = false;
        this.fivePointBtn = false;
        this.tenPointBtn = false;
        this.clusterNameToVote = null;
        this.clusterToVote = null;
        this.timer = 500;
        this.hasScoreOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasScore = 0;
        this.remainScore = this.hasScore;
    }
    VoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgURL = this.appSetting.apiURL + '/images/cluster/';
        this.fetchCluster();
        this.fetchScore();
        switch (this.appSetting.lang) {
            case "EN":
                this.appSetting.getEN().subscribe(function (res) {
                    _this.setText(res.main_section);
                }, function (error) { return console.error(error); });
                break;
            case "TH":
                this.appSetting.getTH().subscribe(function (res) {
                    _this.setText(res.main_section);
                }, function (error) { return console.error(error); });
                break;
        }
        if (this.clusterNameToVote == null) {
            this.clusterNameToVote = "NULL";
        }
    };
    VoteComponent.prototype.initUI = function () {
        this.tenPointBtn = (this.hasScore >= 10) ? false : true;
        this.fivePointBtn = (this.hasScore >= 5) ? false : true;
        this.twoPointBtn = (this.hasScore >= 2) ? false : true;
        if (this.hasScore >= 1) {
            this.onePointBtn = false;
            this.voteScore = 0;
        }
        else {
            this.onePointBtn = true;
            this.voteScore = 0;
        }
    };
    VoteComponent.prototype.fetchScore = function () {
        var _this = this;
        this.usersService.us_id = sessionStorage.getItem("us_id");
        this.usersService.getByKey().subscribe(function (res) {
            var data = res['data'][0];
            _this.hasScore = data.um_points;
            _this.updateRemainScore();
            _this.sentHasScore();
            _this.initUI();
        }, function (error) { return console.error(error); });
    };
    VoteComponent.prototype.fetchCluster = function () {
        var _this = this;
        this.clusterService.getAll().subscribe(function (res) {
            _this.clustersData = res['data'];
        }, function (error) {
            console.error(error);
        });
    };
    VoteComponent.prototype.setText = function (langData) {
        this.voteHeaderText = langData.vote_header;
        this.voteText = langData.vote;
        this.pointText = langData.point;
        this.multiPointText = langData.multi_point;
    };
    VoteComponent.prototype.sentHasScore = function () {
        this.hasScoreOutput.emit(this.hasScore);
    };
    VoteComponent.prototype.clickToVote = function (index) {
        if (this.appSetting.isDebuging)
            console.log(this.clustersData[index]);
        this.clusterToVote = this.clustersData[index];
        this.clusterNameToVote = this.clusterToVote.ct_name_th;
    };
    VoteComponent.prototype.closeModal = function () {
        this.voteScore = 0;
        this.updateRemainScore();
    };
    VoteComponent.prototype.keyupScore = function (event) {
        if (event.keyCode != 69) {
            if (this.voteScore <= 0 || this.voteScore == null) {
                this.voteScore = 0;
            }
            if (this.voteScore > this.hasScore) {
                this.voteScore = this.hasScore;
            }
            this.updateRemainScore();
        }
        else {
            this.voteScore = 0;
            this.updateRemainScore();
        }
    };
    VoteComponent.prototype.vote = function () {
        var _this = this;
        if (this.voteScore <= 0 || this.voteScore > this.hasScore) {
            this.notifier.notify('error', "\u0E04\u0E48\u0E32 " + this.voteScore + " \u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19 !");
            this.fetchScore();
            this.voteScore = 0;
            this.updateRemainScore();
            return;
        }
        this.scoreService.sc_ct_id = this.clusterToVote.ct_id;
        this.scoreService.sc_score = this.voteScore;
        this.scoreService.us_id = sessionStorage.getItem("us_id");
        this.scoreService.createLog().subscribe(function (res) {
            //console.log(res);
            if (res["status"] == 1) {
                // something error here! may be score is out!
                _this.notifier.notify('error', "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E1E\u0E2D\u0E17\u0E35\u0E48\u0E08\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E27\u0E15 !");
                _this.fetchScore();
                _this.voteScore = 0;
                _this.updateRemainScore();
            }
            else if (res["status"] == 0) {
                // ok save the vote
                _this.notifier.notify('success', "\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! \u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E42\u0E2B\u0E27\u0E14 " + _this.voteScore + " \u0E04\u0E30\u0E41\u0E19\u0E19 \u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A " + _this.clusterNameToVote + " \u0E41\u0E25\u0E49\u0E27");
                _this.fetchScore();
                _this.clusterToVote = null;
                _this.voteScore = 0;
                _this.updateRemainScore();
            }
            else {
                // may be network or server error
                _this.notifier.notify('error', "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14 \u0E42\u0E2B\u0E27\u0E15\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 !");
                _this.fetchScore();
                _this.voteScore = 0;
                _this.updateRemainScore();
            }
        });
    };
    VoteComponent.prototype.setScore = function (score) {
        if (this.voteScore <= this.hasScore - score) {
            this.voteScore += score;
            this.updateRemainScore();
        }
    };
    VoteComponent.prototype.plusScore = function () {
        if (this.voteScore < this.hasScore) {
            this.voteScore++;
            this.updateRemainScore();
        }
    };
    VoteComponent.prototype.minusScore = function () {
        if (this.voteScore > 0) {
            this.voteScore--;
            this.updateRemainScore();
        }
    };
    VoteComponent.prototype.minusScoreDown = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.voteScore > 1) {
                _this.voteScore--;
                _this.updateRemainScore();
            }
        }, 150);
    };
    VoteComponent.prototype.plusScoreDown = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.voteScore < _this.hasScore) {
                _this.voteScore++;
                _this.updateRemainScore();
            }
        }, 150);
    };
    VoteComponent.prototype.cancelInterval = function () {
        clearInterval(this.interval);
    };
    VoteComponent.prototype.updateRemainScore = function () {
        this.remainScore = this.hasScore - this.voteScore;
        this.tenPointBtn = (this.remainScore >= 10) ? false : true;
        this.fivePointBtn = (this.remainScore >= 5) ? false : true;
        this.twoPointBtn = (this.remainScore >= 2) ? false : true;
        this.onePointBtn = (this.remainScore >= 1) ? false : true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VoteComponent.prototype, "hasScoreOutput", void 0);
    VoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vote',
            template: __webpack_require__(/*! ./vote.component.html */ "./src/app/vote/vote.component.html"),
            styles: [__webpack_require__(/*! ./vote.component.css */ "./src/app/vote/vote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_cluster_service__WEBPACK_IMPORTED_MODULE_3__["ClusterService"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            src_app_services_score_service__WEBPACK_IMPORTED_MODULE_5__["ScoreService"],
            src_app_services_app_settings_service_service__WEBPACK_IMPORTED_MODULE_6__["AppSettingsServiceService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"]])
    ], VoteComponent);
    return VoteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project_new\VotingSystem\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map