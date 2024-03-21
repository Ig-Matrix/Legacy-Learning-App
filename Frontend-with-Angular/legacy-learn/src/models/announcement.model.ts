export class Announcement {
  constructor(
    public announcementId: number,
    public title: string,
    public announcementContent: string,
    public createdAt: Date,
    public showFullContent: Boolean
  ) {}
}
