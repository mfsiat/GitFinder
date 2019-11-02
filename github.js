// Using ES6 classes
class GitHub {
  constructor() {
    this.client_id = "98018f9a0b3ef926a8e1";
    this.client_secret = "e9f21488fbfc7732c0920267050fd1ae3de74802";
  }

  // get user method
  // creatign an asynchronous function
  // will be creating two request
  // 1> get the user
  // 2> get the repos
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}


