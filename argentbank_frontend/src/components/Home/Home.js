import {Feature} from "./Feature";
import chat_icon from "../../assets/icon-chat.png"
import money_icon from "../../assets/icon-money.png"
import security_icon from "../../assets/icon-security.png"

export default function Home() {
    return (
        <div>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className={"features"}>
                <Feature image={chat_icon} title={"You are our #1 priority"} text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."} />
                <Feature image={money_icon} title={"More savings means higher rates"} text={"The more you save with us, the higher your interest rate will be!"} />
                <Feature image={security_icon} title={"Security you can trust"} text={"We use top of the line encryption to make sure your data and money is always safe."} />
            </section>
        </div>
    )
}