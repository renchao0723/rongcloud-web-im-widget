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
}

interface Window {
    webkitURL: any
    RongIMLib: any
}

declare var Qiniu: Qiniu;

interface Qiniu {
    uploader(config: any): Qiniu
}
