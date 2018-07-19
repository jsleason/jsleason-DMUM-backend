"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Profile = class Profile extends repository_1.Entity {
    getId() {
        return this.id;
    }
};
__decorate([
    repository_1.property({
        type: "number",
        id: true
    }),
    __metadata("design:type", Number)
], Profile.prototype, "profileId", void 0);
__decorate([
    repository_1.property({
        type: "number",
    }),
    __metadata("design:type", Number)
], Profile.prototype, "eventId", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Profile.prototype, "img_schedule", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Profile.prototype, "img_map", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Profile.prototype, "description", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Profile.prototype, "info1", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Profile.prototype, "info2", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Profile.prototype, "info3", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Profile.prototype, "info4", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Profile.prototype, "info5", void 0);
Profile = __decorate([
    repository_1.model({
        name: "profile"
    })
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map