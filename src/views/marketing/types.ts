export interface TargetCondition {
  user_sources: string[]
  keyword: string
}

export interface TargetParams {
  target_type: string
  target_condition: TargetCondition
  target_customers?: string[]
  total?: number
}
