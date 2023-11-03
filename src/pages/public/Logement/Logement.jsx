import React from "react";
import { CarrousselProfil } from "../../../components/CarrousselProfil";
import { RatingLogement } from "../../../components/RatingLogement";
import { CollapseLogement } from "../../../components/CollapseLogement";

export const Logement = () => {
    return (
        <div className="profil-container">
            <CarrousselProfil

            />
            <div>
                <div>
                    <h2>title</h2>
                    <h4>sub title</h4>
                    <div>
                        <p>aaaaaa</p>
                        <p>aaaaaa</p>
                        <p>aaaaaa</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>name name</h4>
                        <span>circle</span>
                    </div>
                    <RatingLogement />
                </div>
                <div>
                    <CollapseLogement />
                    <CollapseLogement />
                </div>
            </div>
        </div>
    )
}