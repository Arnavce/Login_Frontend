"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const solo1_jpg_1 = __importDefault(require("./solo1.jpg"));
const react_router_dom_1 = require("react-router-dom");
const SignUpPage = () => {
    const [username, setUsername] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (react_2.default.createElement("div", { className: " bg-back1 h-screen flex justify-center items-center " },
        react_2.default.createElement("div", { className: "relative w-200 h-150 border-purple-700 border-3   " },
            react_2.default.createElement("img", { className: "h-full w-full object-cover blur-[1px] ", src: solo1_jpg_1.default, alt: "solo" }),
            react_2.default.createElement("div", { className: "absolute top-40 left-12 italic uppercase font-serif text-white text-6xl font-bold  " },
                react_2.default.createElement("div", { className: "pb-4" }, "Welcome"),
                react_2.default.createElement("div", null, "Player")),
            react_2.default.createElement("div", { className: "absolute top-0 right-0 bg-black opacity-80 w-1/2 h-148.5" },
                react_2.default.createElement("div", { className: "pt-50 pl-20" },
                    react_2.default.createElement("input", { onChange: (e) => {
                            setUsername(e.target.value);
                        }, className: "  bg-white py-2 px-7 text-center justify-center rounded-2xl ", type: "text", placeholder: "Username / Email" })),
                react_2.default.createElement("div", { className: "pt-10 pl-20" },
                    react_2.default.createElement("input", { onChange: (e) => {
                            setPassword(e.target.value);
                        }, className: " bg-white py-2 px-7 text-center justify-center rounded-2xl", type: "password", placeholder: "Password" })),
                react_2.default.createElement("div", { className: "pl-36 pt-10" },
                    react_2.default.createElement("button", { className: " px-7 py-2 rounded-2xl bg-button font-bold text-white hover:bg-purple-400 scale-125 transition-all duration-100 cursor-pointer ", onClick: () => {
                            alert(`${username}\n${password}\ndo a backend call you idiot`);
                        } }, "SIGN UP")),
                react_2.default.createElement("div", { className: "absolute top-130 left-35 text-white text-sm cursor-pointer underline hover:text-button", onClick: () => {
                        navigate("/signin");
                    } }, "Already a Player ?")))));
};
exports.default = SignUpPage;
