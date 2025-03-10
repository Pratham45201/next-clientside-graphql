import { gql } from 'urql'

export const CreateIssueMutation = gql`
  mutation CreateIssueMutation($input: CreateIssueInput!) {
    createIssue(input: $input) {
      id
      status
      name
    }
  }
`
