import React, {useContext} from "react";
import Title from "../Title-element/Title";
import { Context } from "../../App";

import "../footer/_style-footer.scss"

const Footer = (props) => {

    const {lenghtTasks, setLenghtTasks} = useContext(Context);

    const Profile = ()=> {
        return (
            <>
            <h4>{`Projekt Kanban board`}</h4>
            <a rel="author"target="_blank" href="https://github.com/Sabarz1993">{`Ahadov Sabarz`}</a>
            <h4>{`2023`}</h4>
            </>
        )
    }
    return (
        <>
        <footer className="footer-block">
            <div className="container-footer">
                <div className="count_container">
                    <Title
                        info = {'Active tasks: '}
                        count = {lenghtTasks.active}
                    />
                    <Title
                        info = {'Finished tasks: '}
                        count = {lenghtTasks.finished}
                    />
                </div>
                <div className="container-info_footer">
                   <Profile/>
                </div>
            </div>
        </footer>
        </>

    )

}

export default Footer;