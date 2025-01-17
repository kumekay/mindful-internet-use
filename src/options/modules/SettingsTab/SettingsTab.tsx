import React from 'react'
import {SectionContainer, SectionHeading, TabHeading} from '@option-ui'
import {AfterBreathingSetting} from './AfterBreathingSetting'
import {NumberOfBreathSetting} from './NumberOfBreathSetting'
import {SettingsIcon} from '@utils'
import {SelectBreathingPattern} from '../../../breathing-patterns/SelectBreathingPattern'
import {Button} from '@ui'
import {RadioButton} from '../../../ui/RadioButton'

export const SettingsTab = () => {
  return (
    <div className="space-y-6 text-amber-50">
      <TabHeading>
        <SettingsIcon />
        Settings
      </TabHeading>

      <SectionContainer>
        <SectionHeading>
          What to do before accessing a mindless website
        </SectionHeading>
        <AfterBreathingSetting />
      </SectionContainer>

      <SectionContainer>
        <SectionHeading>Number of breath on breathing timer</SectionHeading>
        <NumberOfBreathSetting />
      </SectionContainer>

      <SectionContainer>
        <SelectBreathingPattern />
      </SectionContainer>
    </div>
  )
}
