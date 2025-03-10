import { gql } from 'urql'

export const EditIssueMutation = gql`
  mutation EditIssueMutation($input: EditIssueInput!) {
    editIssue(input: $input) {
      id
      name
      content
      status
    }
  }
`
