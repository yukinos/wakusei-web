import React from 'react';

class Main extends React.Component{
    render(){
        return(
            <div>
                <div class="back">
                    <h1 class="title">作業のわくせい</h1>
                    <p class="text">あなたは深宇宙の探索を行う調査員です</p>
                    <p class="text">わくせいの調査員としてのんびり作業しませんか？</p>
                    <p class="text">宇宙人が作業をサポートしてくれます</p>
                    <button type="button" onclick="location.href='https://discord.gg/2GgS2JqS'">このサーバーに参加する</button>
                </div>
            </div>
        );
    }
}

export default Main;