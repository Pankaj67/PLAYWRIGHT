import { Page, Locator } from '@playwright/test';

export class OverallRatingPage {
  readonly page: Page;

  // Home / Overall Rating elements
  readonly overallRatingLink: Locator;
  readonly viewMoreLink: Locator;

  // Voting elements
  readonly commentTextArea: Locator;
  readonly voteButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Overall Rating card on home page
    this.overallRatingLink = page.locator("a[href='/overall']");

    // View More link (dynamic model id)
    this.viewMoreLink = page.locator("a:has-text('View more')");

    // Comment textarea
    this.commentTextArea = page.locator('#comment');

    // Vote button
    this.voteButton = page.getByRole('button', { name: 'Vote!' });
  }

  async clickOverallRating() {
    await this.overallRatingLink.click();
  }

  async clickViewMore() {
    await this.viewMoreLink.first().click();
  }

  async enterComment(comment: string) {
    await this.commentTextArea.fill(comment);
  }

  async clickVote() {
    await this.voteButton.click();
  }
}
