"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expose = exports.ErrorStatusCodesEnum = exports.SuccessStatusCodesEnum = void 0;
const common_1 = require("@nestjs/common");
var SuccessStatusCodesEnum;
(function (SuccessStatusCodesEnum) {
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["Ok"] = 200] = "Ok";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["Created"] = 201] = "Created";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["Accepted"] = 202] = "Accepted";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["NoContent"] = 204] = "NoContent";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["ResetContent"] = 205] = "ResetContent";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["PartialContent"] = 206] = "PartialContent";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["MultiStatus"] = 207] = "MultiStatus";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["AlreadyReported"] = 208] = "AlreadyReported";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["ImUsed"] = 226] = "ImUsed";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["MultipleChoices"] = 300] = "MultipleChoices";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["MovedPermanently"] = 301] = "MovedPermanently";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["Found"] = 302] = "Found";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["SeeOther"] = 303] = "SeeOther";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["NotModified"] = 304] = "NotModified";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["UseProxy"] = 305] = "UseProxy";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["Unused"] = 306] = "Unused";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    SuccessStatusCodesEnum[SuccessStatusCodesEnum["PermanentRedirect"] = 308] = "PermanentRedirect";
})(SuccessStatusCodesEnum || (exports.SuccessStatusCodesEnum = SuccessStatusCodesEnum = {}));
var ErrorStatusCodesEnum;
(function (ErrorStatusCodesEnum) {
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["BadRequest"] = 400] = "BadRequest";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["Unauthorized"] = 401] = "Unauthorized";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["PaymentRequired"] = 402] = "PaymentRequired";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["Forbidden"] = 403] = "Forbidden";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["NotFound"] = 404] = "NotFound";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["NotAcceptable"] = 406] = "NotAcceptable";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["RequestTimeout"] = 408] = "RequestTimeout";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["Conflict"] = 409] = "Conflict";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["Gone"] = 410] = "Gone";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["LengthRequired"] = 411] = "LengthRequired";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["PreconditionFailed"] = 412] = "PreconditionFailed";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["PayloadTooLarge"] = 413] = "PayloadTooLarge";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["UriTooLong"] = 414] = "UriTooLong";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["ExpectationFailed"] = 417] = "ExpectationFailed";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["ImATeapot"] = 418] = "ImATeapot";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["MisdirectedRequest"] = 421] = "MisdirectedRequest";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["Locked"] = 423] = "Locked";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["FailedDependency"] = 424] = "FailedDependency";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["TooEarly"] = 425] = "TooEarly";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["UpgradeRequired"] = 426] = "UpgradeRequired";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["PreconditionRequired"] = 428] = "PreconditionRequired";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["TooManyRequests"] = 429] = "TooManyRequests";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["InternalServerError"] = 500] = "InternalServerError";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["NotImplemented"] = 501] = "NotImplemented";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["BadGateway"] = 502] = "BadGateway";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["GatewayTimeout"] = 504] = "GatewayTimeout";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["InsufficientStorage"] = 507] = "InsufficientStorage";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["LoopDetected"] = 508] = "LoopDetected";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["NotExtended"] = 510] = "NotExtended";
    ErrorStatusCodesEnum[ErrorStatusCodesEnum["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(ErrorStatusCodesEnum || (exports.ErrorStatusCodesEnum = ErrorStatusCodesEnum = {}));
let Expose = class Expose {
    error(statusCode, message) {
        throw new common_1.HttpException({ statusCode, message }, statusCode);
    }
    success(statusCode, message, data, status) {
        return { statusCode, message, data, status };
    }
    notify(statusCode, message, status) {
        return { statusCode, message, status };
    }
};
exports.Expose = Expose;
exports.Expose = Expose = __decorate([
    (0, common_1.Injectable)()
], Expose);
//# sourceMappingURL=expose.js.map