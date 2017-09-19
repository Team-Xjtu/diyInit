(function(win, doc) {

    'use strict';

    window.getQuerystring = function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = location.search.substr(1).match(reg);

        if(r !== null){
            return r[2];
        }
    };

    Vue.http.options.emulateJSON = true;
    Vue.http.options.timeout = 4000;

})(window, document);


/**
 * components
 */
(function(doc) {

    'use strict';

    var components = {

        // 手机模型列表
        shell: {
            props: ["items", "isload"],
            methods: {

            },
            template:
            "<ul :class='{load:isload}' v-show='isload || items.length > 0'>"+
            "<li v-for='item in items'>"+
            "<a :href='item.href'>"+
            "<p>{{ item.title }}</p>"+
            "<p>{{ item.href }}</p>"+
            "</a>"+
            "</li>"+
            "</ul>"
        },
        // 图片库
        material: {
            props: ["items", "getmaterial", "tabindex"],
            methods: {
                getBackground: function(url) {
                    return {
                        backgroundImage: "url("+ url +")"
                    }
                }
            },
            template:
            "<dl class='edit-material-dl'>"+
            "<dt><span class='tab-material' :class='{active:item.active}' v-for='(item, index) in items.class' @click='getmaterial(tabindex, index)'>{{ item.title }}</span></dt>"+
            "<dd>"+
            "<ul class='edit-material-list'>"+
            "<li v-if='tabindex === 0' class='null'><div style='background-image:url(http://www.xyppt.com/app/html/imgs/empty.png)'></div></li>"+
            "<li v-for='(item, index) in items.materials'><div :data-img='item' :style='getBackground(item)'></div></li>"+
            "</ul>"+
            "</dd>"+
            "</dl>"
        },
        // 无数据提示
        null: {
            props:["items", "isload", "tips"],
            template:
            "<div class='no-data' v-show='!isload && items.length === 0'>{{ tips || '暂无数据' }}</div>"
        },
        // 加载指示器
        load: {
            props: ["isload", "isnull", "text"],
            template:
            "<div class='loading' :class='{active:isload}'>"+
            "<em v-if='isnull'>{{ text || '无更多数据' }}</em>"+
            "<span v-else></span>"+
            "</div>"
        }
    };

    window.components = components;

})(document);
