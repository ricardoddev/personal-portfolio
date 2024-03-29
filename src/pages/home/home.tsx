import { Navbar } from "../../components/navbar/navbar";
import { CLIInput } from "./styles";

export function Home() {
    return(
        <>
            <Navbar />
            <CLIInput>
                <strong>ricardoddev/personal-portfolio:<span>~$</span>&nbsp;</strong>
                <input type="text" />
            </CLIInput>
        </>
             
    )
}