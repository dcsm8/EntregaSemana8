# kraken

This project demonstrates the use of Kraken to E2E testing on the Ghost CMS application.

## Project Information
- University: Universidad de los Andes.
- Project: E2E testing of the Ghost CMS application

## Members

- David Sánchez.
- Juan Chiroque.
- Diego Correa.
- Julio Cardenas.

## Prerequisites

- Ghost version :  3.41.1.
- Ghost Cli : 1.24.0.
- Node Version : 14.18.0
- Android Studio.

## Installation

1. Clone the repository:

`git clone https://github.com/julio-c-s/kraken.git`

And move to the repo.

`cd kraken`

2. Install the node dependencies:

`npm install`

2.1. Usually the `kraken-node` module is not recognized in the folder, Id this is the case it has to be installed in the folder.

`npm install kraken-node`

3. Update the credentials of the properties.json file with your own ghost credentials:

```json
{
  "GHOSTUSER": <GHOSTUSER>,
  "GHOSTPASSWORD": <GHOSTPASSWORD>,
  "GHOSTNEWPASSWORD": <GHOSTNEWPASSWORD>
}
```
4. Run the test:

`npx kraken-node run`

## Test Execution

1. In th folder `features/cases` are located all the cases enumerated. The test have to be executed in order beacuse some cases will be executed succefully when previous test were executed.
2. in the folder `features` is located the file  `1login.feature`, this is the first feature. When this test ends the file have to be moved to the cases folder and the file `2login-fail.feature` have to be moved to the `features` folder.
3. This process have to be done in order with the whole bank of test.


