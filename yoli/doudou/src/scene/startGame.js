/**
 * Created by Yoli on 15/11/10
 */

var StartGameScene = cc.Scene.extend({
    onEnter:function(){
        this._super();

        var layer = new StartGameLayer();
        this.addChild(layer);

    }
});