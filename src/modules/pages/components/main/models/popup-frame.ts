export class PopupFrame {
	constructor(isText: boolean, isImage: boolean, next: number, text?: string) {
		this.isTextVisible = isText;
		this.isImageVisible = isImage;
		this.nextFrameInterval = next;
		this.text = text;
	}
	public isTextVisible: boolean;
	public isImageVisible: boolean;
	public nextFrameInterval: number;
	public text: string;
}
