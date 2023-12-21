import React from 'react';
import constants from '../../constants';
import willowProfilePic from '../../assets/willow.png'
import './MessageBubble.css'

const styleByUser = ( user, endUserClass, agentClass ) => {
    return user == constants.END_USER ? endUserClass : agentClass
}

const ProfilePic = ({src, alt}) => {
    return <img src={src} alt={alt} className="profile-pic" />
}

const ImageBubble = ({ user, content, className }) => {
    return (
        <div className={`${className} img_bubble ${styleByUser(user, 'img_bubble-end_user', 'img_bubble-ai_coach')}`}>
            <img src={content} className="img_bubble-img"/>
        </div>
    )
}

const AudioBubble = ({ src }) => {

}

const TextBubble = ({ content, user, className }) => {
    return (
        <div className={` text_bubble ${className}`}>
            {content}
        </div>
    )
}

const MessageBubble = (props) => {
    const bubbleMap = {
        'text': TextBubble,
        'image': ImageBubble,
        'audio': AudioBubble
    }
    
    const Bubble = bubbleMap[props.type];

    return (
        <div className={`msg_bubble-container ${styleByUser(props.user, 'msg_bubble-container-end_user', 'msg_bubble-container-ai_coach')}`}>
            {props.user == constants.AI_COACH ? <ProfilePic src={willowProfilePic} alt="Willow profile pic" /> : <></>}
            <Bubble className={`msg_bubble ${styleByUser(props.user, "msg_bubble-end_user", "msg_bubble-ai_coach")}`} {...props} />
        </div>
    )
}

export default MessageBubble;