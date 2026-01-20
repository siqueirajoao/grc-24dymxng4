// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.1'
  }
  public: {
    Tables: {
      admin_audit_logs: {
        Row: {
          action: string
          admin_id: string | null
          created_at: string | null
          details: Json | null
          entity_id: string | null
          entity_type: string
          id: string
        }
        Insert: {
          action: string
          admin_id?: string | null
          created_at?: string | null
          details?: Json | null
          entity_id?: string | null
          entity_type: string
          id?: string
        }
        Update: {
          action?: string
          admin_id?: string | null
          created_at?: string | null
          details?: Json | null
          entity_id?: string | null
          entity_type?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'admin_audit_logs_admin_id_fkey'
            columns: ['admin_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      audit_findings: {
        Row: {
          created_at: string | null
          description: string
          id: string
          severity: string | null
          status: string | null
          test_id: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          severity?: string | null
          status?: string | null
          test_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          severity?: string | null
          status?: string | null
          test_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'audit_findings_test_id_fkey'
            columns: ['test_id']
            isOneToOne: false
            referencedRelation: 'audit_tests'
            referencedColumns: ['id']
          },
        ]
      }
      audit_plans: {
        Row: {
          created_at: string | null
          end_date: string | null
          id: string
          start_date: string | null
          status: string | null
          title: string
          unit_id: string | null
        }
        Insert: {
          created_at?: string | null
          end_date?: string | null
          id?: string
          start_date?: string | null
          status?: string | null
          title: string
          unit_id?: string | null
        }
        Update: {
          created_at?: string | null
          end_date?: string | null
          id?: string
          start_date?: string | null
          status?: string | null
          title?: string
          unit_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'audit_plans_unit_id_fkey'
            columns: ['unit_id']
            isOneToOne: false
            referencedRelation: 'units'
            referencedColumns: ['id']
          },
        ]
      }
      audit_tests: {
        Row: {
          control_id: string | null
          id: string
          plan_id: string | null
          result: string | null
          tested_at: string | null
          tested_by: string | null
        }
        Insert: {
          control_id?: string | null
          id?: string
          plan_id?: string | null
          result?: string | null
          tested_at?: string | null
          tested_by?: string | null
        }
        Update: {
          control_id?: string | null
          id?: string
          plan_id?: string | null
          result?: string | null
          tested_at?: string | null
          tested_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'audit_tests_control_id_fkey'
            columns: ['control_id']
            isOneToOne: false
            referencedRelation: 'controls'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'audit_tests_plan_id_fkey'
            columns: ['plan_id']
            isOneToOne: false
            referencedRelation: 'audit_plans'
            referencedColumns: ['id']
          },
        ]
      }
      bia_assessments: {
        Row: {
          assessed_by: string | null
          created_at: string | null
          criticality_level: string | null
          financial_impact: number | null
          id: string
          legal_impact: number | null
          operational_impact: number | null
          process_id: string | null
          reputational_impact: number | null
        }
        Insert: {
          assessed_by?: string | null
          created_at?: string | null
          criticality_level?: string | null
          financial_impact?: number | null
          id?: string
          legal_impact?: number | null
          operational_impact?: number | null
          process_id?: string | null
          reputational_impact?: number | null
        }
        Update: {
          assessed_by?: string | null
          created_at?: string | null
          criticality_level?: string | null
          financial_impact?: number | null
          id?: string
          legal_impact?: number | null
          operational_impact?: number | null
          process_id?: string | null
          reputational_impact?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'bia_assessments_process_id_fkey'
            columns: ['process_id']
            isOneToOne: false
            referencedRelation: 'processes'
            referencedColumns: ['id']
          },
        ]
      }
      companies: {
        Row: {
          cnpj: string | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          cnpj?: string | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          cnpj?: string | null
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      control_executions: {
        Row: {
          control_id: string | null
          evidence_url: string | null
          executed_at: string | null
          executed_by: string | null
          id: string
          notes: string | null
          status: string | null
        }
        Insert: {
          control_id?: string | null
          evidence_url?: string | null
          executed_at?: string | null
          executed_by?: string | null
          id?: string
          notes?: string | null
          status?: string | null
        }
        Update: {
          control_id?: string | null
          evidence_url?: string | null
          executed_at?: string | null
          executed_by?: string | null
          id?: string
          notes?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'control_executions_control_id_fkey'
            columns: ['control_id']
            isOneToOne: false
            referencedRelation: 'controls'
            referencedColumns: ['id']
          },
        ]
      }
      controls: {
        Row: {
          code: string
          created_at: string | null
          description: string | null
          frequency: string | null
          id: string
          is_sox: boolean | null
          name: string
          next_due_date: string | null
          owner_id: string | null
          status: string | null
          type: string | null
          unit_id: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          description?: string | null
          frequency?: string | null
          id?: string
          is_sox?: boolean | null
          name: string
          next_due_date?: string | null
          owner_id?: string | null
          status?: string | null
          type?: string | null
          unit_id?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string | null
          frequency?: string | null
          id?: string
          is_sox?: boolean | null
          name?: string
          next_due_date?: string | null
          owner_id?: string | null
          status?: string | null
          type?: string | null
          unit_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'controls_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'controls_unit_id_fkey'
            columns: ['unit_id']
            isOneToOne: false
            referencedRelation: 'units'
            referencedColumns: ['id']
          },
        ]
      }
      policies: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          responsible_area: string | null
          title: string
          validity_end: string | null
          version: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          responsible_area?: string | null
          title: string
          validity_end?: string | null
          version?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          responsible_area?: string | null
          title?: string
          validity_end?: string | null
          version?: string | null
        }
        Relationships: []
      }
      policy_acknowledgments: {
        Row: {
          acknowledged_at: string | null
          id: string
          policy_id: string | null
          user_id: string | null
        }
        Insert: {
          acknowledged_at?: string | null
          id?: string
          policy_id?: string | null
          user_id?: string | null
        }
        Update: {
          acknowledged_at?: string | null
          id?: string
          policy_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'policy_acknowledgments_policy_id_fkey'
            columns: ['policy_id']
            isOneToOne: false
            referencedRelation: 'policies'
            referencedColumns: ['id']
          },
        ]
      }
      processes: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          unit_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          unit_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          unit_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'processes_unit_id_fkey'
            columns: ['unit_id']
            isOneToOne: false
            referencedRelation: 'units'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          department: string | null
          email: string | null
          id: string
          is_active: boolean | null
          job_title: string | null
          name: string | null
          role: string | null
          tenant_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          department?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          job_title?: string | null
          name?: string | null
          role?: string | null
          tenant_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          department?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          job_title?: string | null
          name?: string | null
          role?: string | null
          tenant_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      risk_controls: {
        Row: {
          control_id: string
          risk_id: string
          strategy: string | null
        }
        Insert: {
          control_id: string
          risk_id: string
          strategy?: string | null
        }
        Update: {
          control_id?: string
          risk_id?: string
          strategy?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'risk_controls_control_id_fkey'
            columns: ['control_id']
            isOneToOne: false
            referencedRelation: 'controls'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'risk_controls_risk_id_fkey'
            columns: ['risk_id']
            isOneToOne: false
            referencedRelation: 'risks'
            referencedColumns: ['id']
          },
        ]
      }
      risk_factors: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          impact: number | null
          probability: number | null
          risk_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          impact?: number | null
          probability?: number | null
          risk_id: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          impact?: number | null
          probability?: number | null
          risk_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'risk_factors_risk_id_fkey'
            columns: ['risk_id']
            isOneToOne: false
            referencedRelation: 'risks'
            referencedColumns: ['id']
          },
        ]
      }
      risk_pendencies: {
        Row: {
          created_at: string
          description: string
          id: string
          owner_id: string | null
          risk_id: string
          status: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          owner_id?: string | null
          risk_id: string
          status?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          owner_id?: string | null
          risk_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: 'risk_pendencies_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'risk_pendencies_risk_id_fkey'
            columns: ['risk_id']
            isOneToOne: false
            referencedRelation: 'risks'
            referencedColumns: ['id']
          },
        ]
      }
      risks: {
        Row: {
          categories: string[] | null
          category: string | null
          created_at: string | null
          department: string | null
          description: string | null
          id: string
          impact_init: number | null
          impact_res: number | null
          owner_id: string | null
          prob_init: number | null
          prob_res: number | null
          status: string | null
          title: string
          total_score: number | null
          unit_id: string | null
        }
        Insert: {
          categories?: string[] | null
          category?: string | null
          created_at?: string | null
          department?: string | null
          description?: string | null
          id?: string
          impact_init?: number | null
          impact_res?: number | null
          owner_id?: string | null
          prob_init?: number | null
          prob_res?: number | null
          status?: string | null
          title: string
          total_score?: number | null
          unit_id?: string | null
        }
        Update: {
          categories?: string[] | null
          category?: string | null
          created_at?: string | null
          department?: string | null
          description?: string | null
          id?: string
          impact_init?: number | null
          impact_res?: number | null
          owner_id?: string | null
          prob_init?: number | null
          prob_res?: number | null
          status?: string | null
          title?: string
          total_score?: number | null
          unit_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'risks_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'risks_unit_id_fkey'
            columns: ['unit_id']
            isOneToOne: false
            referencedRelation: 'units'
            referencedColumns: ['id']
          },
        ]
      }
      sox_approvals: {
        Row: {
          approver_id: string | null
          execution_id: string | null
          id: string
          status: string | null
          step: string | null
          updated_at: string | null
        }
        Insert: {
          approver_id?: string | null
          execution_id?: string | null
          id?: string
          status?: string | null
          step?: string | null
          updated_at?: string | null
        }
        Update: {
          approver_id?: string | null
          execution_id?: string | null
          id?: string
          status?: string | null
          step?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'sox_approvals_execution_id_fkey'
            columns: ['execution_id']
            isOneToOne: false
            referencedRelation: 'control_executions'
            referencedColumns: ['id']
          },
        ]
      }
      system_settings: {
        Row: {
          config_key: string
          config_value: Json
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          config_key: string
          config_value: Json
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          config_key?: string
          config_value?: Json
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'system_settings_updated_by_fkey'
            columns: ['updated_by']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      units: {
        Row: {
          company_id: string | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: 'units_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_super_admin: { Args: never; Returns: boolean }
      make_super_admin: { Args: { target_email: string }; Returns: undefined }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
