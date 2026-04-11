import { expect, test } from '@wordpress/e2e-test-utils-playwright';

test.beforeEach(async ({ requestUtils }) => {
	await requestUtils.login();
});

test('Plugin is active and block is registered', async ({ admin, editor }) => {
	await admin.createNewPost({ title: 'Test post' });
	await editor.insertBlock({ name: 'kevinbatdorf/fit-to-width' });
	await expect(
		editor.canvas.getByRole('document', { name: 'Block: Fit To Width' }),
	).toBeVisible();
});

test('Block renders on the frontend', async ({ admin, editor, page }) => {
	await admin.createNewPost({ title: 'Visual test' });
	await editor.insertBlock({ name: 'kevinbatdorf/fit-to-width' });

	const block = editor.canvas.getByRole('document', {
		name: 'Block: Fit To Width',
	});
	await block.click();
	await page.keyboard.type('Hello World');
	await page.keyboard.press('Shift+Enter');
	await page.keyboard.type('Fit To Width');

	await editor.publishPost();

	const permalink = page
		.locator('.post-publish-panel__postpublish-post-address input')
		.inputValue();
	await page.goto(await permalink);
	const rendered = page.locator('.wp-block-kevinbatdorf-fit-to-width');
	await expect(rendered).toBeVisible();
	await expect(rendered.locator('.ftw-fit-to-width')).toHaveCount(2);
	await expect(rendered).toHaveScreenshot('fit-to-width-frontend.png', {
		maxDiffPixelRatio: 0.01,
	});
});
