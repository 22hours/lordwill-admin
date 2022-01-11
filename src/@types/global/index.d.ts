declare module "Global" {
  export namespace GlobalTypes {
    type post = {
      content: string;
      data: {
        title: string;
        publishedAt: string;
        updatedAt: string;
        summary: string;
        tags: string[];
      };
    };

    type postPreviewItem = post["data"] & { id: string };
    type postPreviewList = postPreviewItem[];
  }
}
