import WebUI from 'sketch-module-web-view'

export default function (context) {
    const panel = new WebUI(context, 'panel/panel.html', {
        identifier: 'com.floriangaechter.sketch-plugin.panel',
        x: 0,
        y: 0,
        width: 40,
        height: 160,
        blurredBackground: true,
        onlyShowCloseButton: true,
        hideTitleBar: false,
        shouldKeepAround: true,
        frameLoadDelegate: {
            'webView:didFinishLoadForFrame:'(webView, webFrame) {
                context.document.showMessage('UI loaded!')
            },
            'webView:willPerformClientRedirectToURL:delay:fireDate:forFrame:'(sender, URL, seconds, date, frame) {
                context.document.showMessage(URL)
            }
        }
    })
}
