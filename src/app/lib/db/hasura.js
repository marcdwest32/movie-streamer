const HASURA_ADMIN_SECRET = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET
const HASURA_ADMIN_URL = process.env.NEXT_PUBLIC_HASURA_ADMIN_URL

export async function queryHasuraGQL(operationsDoc, operationName, variables) {
  const result = await fetch(HASURA_ADMIN_URL, {
    method: 'POST',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Im1hcmNkd2VzdCIsImlhdCI6MTY5MzAxNTM2MywiZXhwIjoxNjk1NjA3MzYzLCJqdGkiOiIyOWY5Y2RlMi01ZjhiLTQyNTItYjY2MC05NWMyN2QzMWU4YzQiLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS11c2VyLWlkIjoibWFyY2R3ZXN0In19.Hgp6GXKYLg0JxdZnSEnEW4Fckok3USGVJHDWAbrRBe0',
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  })

  return await result.json()
}

function fetchMyQuery() {
  const operationsDoc = `query MyQuery {
    users {
      id
      email
      issuer
      publicAddress
    }
  }`
  return queryHasuraGQL(operationsDoc, 'MyQuery', {})
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery()

  if (errors) {
    // handle those errors like a pro
    console.error(errors)
  }

  // do something great with this precious data
  console.log(data)
}
startFetchMyQuery()

// function executeMyMutation() {
//   return queryHasuraGQL(operationsDoc, 'MyMutation', {})
// }

// async function startExecuteMyMutation() {
//   const { errors, data } = await executeMyMutation()

//   if (errors) {
//     // handle those errors like a pro
//     console.error(errors)
//   }

//   // do something great with this precious data
//   console.log(data)
// }

// startExecuteMyMutation()
