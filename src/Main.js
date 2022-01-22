import React from 'react';
import Apple from './images/apple-logo.svg';
import Google from './images/google-play.png';
import Join_button_a from './images/join_button_a.png';

class Main extends React.Component{
    render(){
        return(
            <div>
                <div class="back-ground">

                    <h1 class="title">作業のわくせい</h1>

                    <p class="text">作業のわくせいは作業通話を専門としたdiscordサーバーです</p>
                    <p class="text">わくせいの調査員としてのんびり作業しませんか？</p>
                    <p class="text">宇宙人があなた作業をサポートしてくれます</p>

                    <a href="https://discord.gg/8egTmRhU" target="blank"><img class="join_button_a" src={Join_button_a} alt="join"/></a>

                    <h1 class="qa1"><span1>Q , </span1>discordとは？</h1>
                    <h2 class="qa1"><span2>A , </span2>通話がとても快適にできるすごいSNSなのです</h2>

                    <h3 class="disdow">discordをダウンロード↓↓↓</h3>

                    <a href="https://apps.apple.com/jp/app/discord-%E8%A9%B1%E3%81%9D%E3%81%86-%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%81%97%E3%82%88%E3%81%86-%E9%9B%86%E3%81%BE%E3%82%8D%E3%81%86/id985746746" target="blank"><img  class ="apple" src={Apple} alt="apple"/></a>
                    <a href="https://play.google.com/store/apps/details?id=com.discord&hl=ja&gl=US" target="blank"><img  class="google" src={Google} alt="google"/></a>

                    <a href="https://discord.gg/8egTmRhU" target="blank"><button class="button2">PCの方はこちらから</button></a>

                    <h1 class="qa1"><span1>Q , </span1>discordサーバーとは？</h1>
                    <h2 class="qa1"><span2>A , </span2>よくあるSNSの中で作られるグループの様なものです。<br />気軽に他人と通話、テキストチャットなどが楽しめます。</h2>
                </div>

            </div>
        );
    }
}

export default Main;