import React, { useState } from "react";

import "./Modify.css";

type Action = "create" | "delete" | "none";

export const Modify: React.FC = () => {
    const PASSWORD = "secretpassword";

    const [pwdInput, setPwdInput] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isPwdCorrect = PASSWORD === pwdInput;

    function checkPassword() {
        if (isPwdCorrect) {
            setIsLoggedIn(true);
        } else {
            alert("Sifre yanlis! Tekrar dene.");
            setPwdInput("");
        }
    }

    const [actionOption, setActionOption] = useState<Action>("none");

    console.log(actionOption);

    return !isLoggedIn ? (
        <div className="login-screen">
            <div className="login-screen-container">
                <h2>
                    Degisiklik uygulamak <br /> icin giris yap.
                </h2>

                <div className="input-section">
                    <div className="label-section">
                        <div className="label">Sifre gir:</div>

                        <input
                            type="text"
                            placeholder="gizlisifre123"
                            value={pwdInput}
                            onChange={(e) => setPwdInput(e.target.value)}
                        />
                    </div>

                    <button onClick={checkPassword}>Tamam</button>
                </div>
            </div>
        </div>
    ) : (
        <div className="options-screen">
            <h1>Oda duzeni...</h1>

            <div className="options-wrapper">
                <button onClick={() => setActionOption("create")}>
                    Olustur
                </button>

                <button onClick={() => setActionOption("delete")}>Sil</button>
            </div>
        </div>
    );
};
