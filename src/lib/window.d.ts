declare module RongIMLib {
    class Expression {
        static retrievalEmoji(a: any, b: any): string
        static getEmojiObjByEnglishNameOrChineseName(obj: any): any
        static getAllExpression(number: any, start: any): any
    }
    class voice {
        static play(content: string, time: any): void
    }
}
