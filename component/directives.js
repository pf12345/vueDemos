/*!
 *  all directives
 *  此文件用于所有自定义指令
 */

//v-stop-pro
export const stopPro = {
    bind: function () {
        $(this.el).unbind().click(function (event) {
            event.stopPropagation();
        });
    }
};