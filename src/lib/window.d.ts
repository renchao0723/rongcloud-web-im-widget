declare module RongIMLib {
    class Expression {
        static retrievalEmoji(a: any, b: any): string
        static getEmojiObjByEnglishNameOrChineseName(obj: any): any
        static getAllExpression(number: any, start: any): any
    }
    class voice {
        static play(content: string, time: any): void
    }
    class RongIMEmoji {
        static emojis: any[]
        static init(): void

        static emojiToSymbol(str: string): string
        static symbolToEmoji(str: string): string
        static symbolToHTML(str: string): string
        static emojiToHTML(str: string): string
    }
    class RongIMVoice {
        static init(): void
        static play(data: string, duration: number): void
        static stop(): void
        static onprogress(): void
    }
}

interface Window {
    webkitURL: any
    RongIMLib: any
}
interface JQuery {
    rebox(target: any): void
    niceScroll(config: any): any
}

declare var Qiniu: Qiniu;

interface Qiniu {
    uploader(config: any): Qiniu
}
