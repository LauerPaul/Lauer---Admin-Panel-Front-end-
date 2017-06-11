<?php

class WordsModel extends Model {

	public function getLabels(){
		$Labels = array();

		$array = $this->DB->fetch_list("SELECT label, value FROM ".LOCALES_TABLE." WHERE language = '".Core::gi()->lng->getLocale()."' ORDER BY label");

		foreach ($array as $value) {
			$Labels[$value['label']] = array('label' => $value['label'], 'value' => $value['value']);
		}

		return $Labels;
	}

	public function getLabel($Arg=false){
		if($Arg){
			$Arg = str_replace('label-', '', $Arg);
			$List = array();

			$array = $this->DB->fetch_list("SELECT * FROM ".LOCALES_TABLE." WHERE label = '".$Arg."'");

			foreach ($array as $value) {
				foreach (Core::gi()->cfg->Get("languages") as $lang) {
					if($value['language'] == $lang){
						$List[$value['language']] = $value;
					}
				}
			}

			return $List;
		}
	}

	public function updateLabel($Arg=false, $Method=false){
		if($Arg){
			foreach ($Arg as $id => $value) {
				if($Method !== 'save'){
					$item = $this->DB->select(LOCALES_TABLE, $id);
					if($item == ''){
						$this->DB->insert(LOCALES_TABLE, array('id' => $id, 'value' => $value['value'], 'language' => $value['language'], 'label' => $value['label']));
					}else{
						$this->update = $this->DB->update(LOCALES_TABLE, $id, array('value' => $value['value']));
					}
				}else{
					$this->DB->insert(LOCALES_TABLE, array('id' => $id, 'value' => $value['value'], 'language' => $value['language'], 'label' => $value['label']));
				}
			}

			return $this;
		}
	}

	public function removeLabel($Arg=false){
		if($Arg){
			foreach ($Arg as $id) {
				$this->removeItem = $this->DB->delete(LOCALES_TABLE, $id);
			}
			return $this;
		}
	}
}