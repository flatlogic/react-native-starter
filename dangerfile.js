/* eslint-disable import/no-extraneous-dependencies */
import { markdown, message, danger, fail, warn } from 'danger';
import includes from 'lodash/includes';

const modifiedMD = danger.git.modified_files.join('\n- ');
message(`Changed Files in this PR: \n - ${modifiedMD}`);

if (danger.github.pr.body.length < 10) {
  fail('This pull request needs an description.');
}

const packageChanged = includes(danger.git.modified_files, 'package.json');
const lockfileChanged = includes(danger.git.modified_files, 'yarn.lock');
if (packageChanged && !lockfileChanged) {
  const msg = 'Changes were made to package.json, but not to yarn.lock';
  const idea = 'Perhaps you need to run `yarn install`?';
  warn(`${msg} - <i>${idea}</i>`);
}

const bigPRThreshold = 600;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(`:exclamation: Big PR`);
  markdown(
    `Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.`
  );
}

if (danger.github.pr.assignee === null) {
  fail(
    'Please assign someone to merge this PR, and optionally include people who should review.'
  );
}
