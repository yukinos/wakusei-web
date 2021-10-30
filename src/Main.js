import React from 'react';
import Apple from './images/apple-logo.svg';
import Google from './images/google-play.png';

class Main extends React.Component{
    render(){
        return(
            <div>
                <div class="back-ground">
                    <h1 class="title">作業のわくせい</h1>
                    <p class="text">作業のわくせいは作業通話を専門としたdiscordサーバーです</p>
                    <p class="text">わくせいの調査員としてのんびり作業しませんか？</p>
                    <p class="text">宇宙人があなた作業をサポートしてくれます</p>
                    <button class="button1" onclick="location.href='https://discord.gg/2GgS2JqS'">このサーバーに参加する</button>
                    <h1 class="ques1">Q , discordとは？</h1>
                    <h2 class="ans1">A , 通話がとても快適にできるすごいSNSなのです</h2>
                    <p>すごいんだあああああああああああ</p>
                    <p>うわああああああああああああああああ</p>
                    <p>僕の話を聞いてよおおおおおおおおおおおお</p>
                    <h3>discordをダウンロード！↓↓↓</h3>
                    <img  class ="apple" src={Apple} alt="apple"/>
                    <img  class="google" src={Google} alt="google"/>
                    <button class="button2" onclick="location.href='https://discord.com/'">PCの方はこちらから！</button>
                    <h1 class="ques2">Q , discordサーバーとは？</h1>
                    <h2 class="ans2">A , よくあるSNSの中で作られるグループの様なものです</h2>
                    <p>そういうことだってばさ！</p>
                </div>

            </div>
        );
    }
}

export default Main;