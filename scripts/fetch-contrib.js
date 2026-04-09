const fs = require("fs");

const query = `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            contributionLevel
          }
        }
      }
    }
  }
}
`;

async function run() {
  if (!process.env.GITHUB_TOKEN) {
    console.error("GITHUB_TOKEN environment variable is required");
    process.exit(1);
  }

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { login: "AFA06" },
    }),
  });

  const json = await res.json();
  console.log("API response:", JSON.stringify(json, null, 2));

  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    process.exit(1);
  }

  if (!json.data?.user?.contributionsCollection?.contributionCalendar) {
    console.error("Invalid data structure:", json);
    process.exit(1);
  }

  fs.writeFileSync(
    "public/contributions.json",
    JSON.stringify(
      json.data.user.contributionsCollection.contributionCalendar,
      null,
      2
    )
  );

  console.log("contributions.json updated");
}

run();
