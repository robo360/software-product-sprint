// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomMessage() {
  const messages =
      ['Fortune is coming.', 'You will be heard.', "It's time", 'Bonjour le monde!'];

  // Pick a random greeting.
  const message = messages[Math.floor(Math.random() * messages.length)];

  // Add it to the page.
  const messageContainer = document.getElementById('greeting-container');
  messageContainer.innerText = message;
}
