import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import logoSVG from "/assets/logo.svg";
import TranslateSvg from "/src/icons/translate.svg";
import GithubSvg from "/src/icons/github.svg";
import "./index.css";

function Header() {
    const {i18n} = useTranslation();
    const [isShowLanguagesMenu, setIsShowLanguagesMenu] = useState(false);

    // 打开新窗口
    const openDefaultBrowser = function (url) {
        window.electronAPI.emit("open-url", url);
    };

    const onGitHubClickHandle = () => {
        openDefaultBrowser("https://github.com/");
    };

    const onTranslateClickHandle = (e) => {
        e.stopPropagation();
        setIsShowLanguagesMenu(!isShowLanguagesMenu);
    };

    const onTranslateItemClickHandle = (language) => {
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        const clickHandle = () => {
            if (isShowLanguagesMenu) {
                setIsShowLanguagesMenu(false);
            }
        };
        document.addEventListener("click", clickHandle);
        return () => {
            document.removeEventListener("click", clickHandle);
        };
    }, [isShowLanguagesMenu]);

    return (
        <div className="header">
            <div className="header-left">
                <img className="svg-logo" src={logoSVG}/>
                <div className="title">Sharing GUI</div>
            </div>
            <div className="icons-box">
                {/* <TranslateSvg
          className="icon translate-icon"
          onClick={onTranslateClickHandle}
        /> */}
                <img
                    src={TranslateSvg}
                    className="icon translate-icon"
                    onClick={onTranslateClickHandle}
                />
                {isShowLanguagesMenu && (
                    <div className="translate-menu">
                        <div
                            className="translate-item"
                            onClick={() => onTranslateItemClickHandle("en")}
                        >
                            English
                        </div>
                        <div
                            className="translate-item"
                            onClick={() => onTranslateItemClickHandle("zh")}
                        >
                            简体中文
                        </div>
                    </div>
                )}
                {/*<GithubSvg className="icon github-icon" onClick={onGitHubClickHandle}/>*/}
                <img src={GithubSvg} className="icon github-icon" onClick={onGitHubClickHandle}/>
            </div>
        </div>
    );
}

export default Header;
