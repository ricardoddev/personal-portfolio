import { Outlet } from "react-router-dom";
import { InfoExibitionWrapper } from "./styles";

export function InfoExibition() {
    return (
        <InfoExibitionWrapper>
            <Outlet />
        </InfoExibitionWrapper>
    )
}